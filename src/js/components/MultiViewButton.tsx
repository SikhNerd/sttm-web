import React from 'react'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import MergeIcon from '@/components/Icons/MergeIcon';
import { setMultiViewPanel } from "@/features/actions";

interface IMultiViewButton {
  showMultiViewPanel: boolean
}

const MultiViewButton = (props: any) => {
  const dispatch = useDispatch()
  const typedUseSelector: TypedUseSelectorHook<IMultiViewButton> = useSelector;
  const showMultiViewPanel = typedUseSelector(state => state.showMultiViewPanel)

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(setMultiViewPanel(!showMultiViewPanel))
  }

  return (
    <button className="multi-view" onClick={onClick}>
      <MergeIcon width="2em" {...props} />
      <span>Multi View</span>
    </button>
  )
}

export default MultiViewButton