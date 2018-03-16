/* globals API_URL */
import React from 'react';
import PropTypes from 'prop-types';
import { buildApiUrl } from 'shabados';
import PageLoader from '../PageLoader';
import ShabadContent from '../../components/ShabadContent';

const Stub = () => <div className="spinner" />;

export default class Shabad extends React.PureComponent {
  static propTypes = {
    random: PropTypes.bool,
    highlight: PropTypes.number,
    id: PropTypes.string,
  };

  render() {
    const { random, id, highlight } = this.props;
    const url = buildApiUrl(random
      ? { random, API_URL }
      : { random, id, API_URL }
    );

    return (
      <PageLoader url={url}>{({ data, loading }) =>
        loading
          ? <Stub />
          : (
            <div className="row" id="content-root">
              <ShabadContent
                random={random}
                type="shabad"
                highlight={highlight}
                info={data.shabadinfo}
                gurbani={data.gurbani}
                nav={data.navigation}
              />
            </div>
          )
      }</PageLoader>
    );
  }
}