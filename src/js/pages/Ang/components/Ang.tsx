/* globals API_URL */
import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useHistory, useLocation } from 'react-router-dom';

import GenericError, { BalpreetSingh } from '@/components/GenericError';
import ShabadContent from '@/components/ShabadContent';
import BreadCrumb from '@/components/Breadcrumb';
import { saveAng, errorEvent, ACTION, isShowSehajPaathModeRoute } from '@/util';
import { SOURCES, TEXTS } from '@/constants';

import { useKeydownEventHandler } from '@/hooks';
import { useObservePanktis, useFetchAngData } from '../hooks';
import { changeHighlightedPankti } from '../utils';

export const Stub = () => <div className="spinner" />;

type Sources = keyof typeof SOURCES;
interface IAngProps {
  ang: number
  source: Sources
  highlight: number
}

const Ang: React.FC<IAngProps> = ({
  ang,
  source,
  highlight,
}) => {
  const history = useHistory();
  const location = useLocation();
  const { sehajPaathMode, isLoadingAng } = useSelector(state => state);
  const isSehajPaathModeRoute = isShowSehajPaathModeRoute(location.pathname);
  const isSehajPaathMode = sehajPaathMode && isSehajPaathModeRoute;
  const [prefetchAng, setPrefetchAng] = useState<number>(ang);
  const { errorFetchingAngData, angsDataMap } = useFetchAngData({ ang: prefetchAng === -1 ? ang : prefetchAng, source, setPrefetchAng, isSehajPaathMode });
  const angData = angsDataMap[ang];
  const changeHighlightedPanktiHandler = useCallback(changeHighlightedPankti({
    ang,
    source,
    highlight,
    angData,
    history
  }),
    [ang, source, highlight, angData, history]) as unknown as EventListener;
  useObservePanktis({ source, history, setPrefetchAng, isSehajPaathMode });
  useKeydownEventHandler(changeHighlightedPanktiHandler)

  // We keep track whether at this particular url/route can we make sehaj paath functional even if the global state for it is true

  // There is neither error, nor loading going on, nor there is data
  // then it's first time render
  const isInitialRender = !errorFetchingAngData && !isLoadingAng && !angsDataMap[ang];

  if (source === 'G') {
    saveAng(ang);
  }

  // We can't show this spinner on sehaj paath mode, as this makes it looks like a re render
  if (!isSehajPaathMode) {
    if (isLoadingAng || isInitialRender) {
      return <div className="spinner" />
    }
  }

  if (errorFetchingAngData) {
    errorEvent({
      action: ACTIONS.ANG_NOT_FOUND,
      label: `ang: ${ang}, source: ${source}`,
    });
    return (
      <GenericError
        title={TEXTS.ANG_NOT_FOUND}
        description={
          <>
            {TEXTS.ANG_NOT_FOUND_DESCRIPTION(ang, SOURCES[source])}
            <Link to="/help#Desktop-i-cant-find-my-shabad.">
              {' '}
              {TEXTS.HELP_SECTION}
            </Link>{' '}
              or
            <Link to="/index"> {TEXTS.INDEX_SECTION}</Link>.
          </>
        }
        image={BalpreetSingh}
      />
    )
  }

  let nav = {};
  let info = { source: '' };
  if (!isLoadingAng && angsDataMap[ang]) {
    nav = Array.isArray(angsDataMap[ang].navigation) ? {} : angsDataMap[ang].navigation;
    info = { source: angsDataMap[ang].source }
  }

  return (
    <div className="row" id="content-root">
      <BreadCrumb links={[{ title: TEXTS.URIS.ANG }]} />
      <ShabadContent
        type="ang"
        isMultiPage={isSehajPaathMode}
        isLoadingContent={isLoadingAng}
        gurbani={isSehajPaathMode ? null : angsDataMap[ang].page}
        pages={Object.values(angsDataMap)}
        highlight={highlight || 1}
        nav={nav}
        info={info}
      />
    </div>
  )
}

export default Ang;