import React, { useEffect } from 'react'
import { IRootState } from 'store/state'
import { useSelector } from 'react-redux'
import { registerSubscribes } from 'store/subscribes'
import { copyGifToClipboard } from 'store/presenter'

export const GifViewer: React.FC = () => {
  const foundGifs = useSelector((state: IRootState) => state.foundGifs)
  useEffect(registerSubscribes, [])
  return (
    <div className="gif-viewer">
      {foundGifs.map((gif: string) => (
        <img src={gif} alt="gif" key={gif} onClick={() => copyGifToClipboard(gif)} className="gif-viewer__item" />
      ))}
    </div>
  )
}