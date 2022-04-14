import React from 'react'
import { CoverPlay } from '../atoms/coverplay/CoverPlay'

export const CardResult = ({song}) => {
  const{album, artist} = song

  return (
    <div className='min-h-fit  w-40'>
        <CoverPlay
         classContainer='h-40 w-40 relative'
         classImg='h-full'
         classPlay='h-9 w-8'
         img={album?.cover_medium}
         iconEllipsis
         song={song}
        />
        <div className='flex flex-col pt-2 h-full w-full'>
            <p className='card-result-title'>{song.title_short}</p>
            <p className='card-result-subtitle'>{artist?.name} - {album?.title}</p>
        </div>
    </div>
  )
}
