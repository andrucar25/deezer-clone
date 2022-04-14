import React from 'react'

export const Slider = ({volume}) => {
  return (
    <div>
        <input className='footer-slider' type='range' min={0} max={1} step={0.01} value={volume}/>
    </div>
  )
}
