import React from 'react'

import {FaPlay} from 'react-icons/fa';
import {FaEllipsisV} from 'react-icons/fa';

import {usePlaySong} from '../../hooks/usePlaySong';

export const CoverPlay = ({classContainer,classImg, classPlay, img, iconEllipsis, song}) => {

  const { playSong } = usePlaySong();

  return (

  <div className={`${classContainer}`}>
    <img className={`${classImg}`} src={`${img}`} alt={song?.title}/>
    { iconEllipsis && 
        <FaEllipsisV className='absolute top-2 right-1 text-white h-5'/>
}
    <div className='w-full h-full flex flex-row justify-center items-center absolute left-0 bottom-0'>
             <FaPlay 
             onClick={() => playSong(song)}
             className={`text-white cursor-pointer ${classPlay}`}
             />
     </div>
  </div>
       
  )
}
