import React from 'react'
import { CoverPlay } from '../atoms/coverplay/CoverPlay'

export const CardResult = ({song}) => {
    console.log(song)
  return (
    <div className='h-52 w-40'>
        <CoverPlay
         classContainer='h-40 w-40 relative'
         classImg='h-full'
         classPlay='h-9 w-8'
         img={song.img}
         iconEllipsis
        />
        <div className='flex flex-col pt-2 h-full w-full'>
            <p className='card-result-title'>{song.album}</p>
            <p className='card-result-subtitle'>{song.artist}</p>
        </div>
    </div>
  )
}
