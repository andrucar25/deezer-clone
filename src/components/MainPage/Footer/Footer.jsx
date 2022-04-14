import React, { useState } from 'react'
import './styles/footer.css'

import {AiFillStepBackward, AiFillStepForward, AiFillSound} from 'react-icons/ai';
import {FaPlay} from 'react-icons/fa';
import {GiPauseButton} from 'react-icons/gi';
import { useSelector } from 'react-redux';

import ReactHowler from 'react-howler'
import { usePlaySong } from '../MainContent/hooks/usePlaySong';

export const Footer = () => {

  const {selectedSong, isPlaying} = useSelector((state) => ({...state.song}))
  const {pauseSong, playSongAgain, nextSong, prevSong} = usePlaySong();

  const [volumeSong, setVolumeSong] = useState(0.5)

  return (
    <div className='footer-player w-screen h-24 absolute bottom-0 left-0'>
        {selectedSong !== undefined ? (
          <div className='flex flex-row justify-between w-full h-full'>
          <div className='h-full flex flex-row gap-5'>
            
              <div className='h-full w-28'>
                <img className='h-full w-full' src={selectedSong?.album?.cover_medium} alt={selectedSong?.title}/>
              </div>
              <div className='flex flex-col justify-center h-full w-52'>
                <p className='footer-artist-song truncate overflow-hidden'>{selectedSong?.title}</p>
                <p className='footer-artist truncate overflow-hidden'>{selectedSong?.artist?.name} - {selectedSong?.album?.title}</p>
              </div>
            
          </div>

          <div className='flex flex-row h-full items-center gap-6'>
              <AiFillStepBackward className='text-white w-9 h-9 cursor-pointer' onClick={() => prevSong(selectedSong?.id)}/>
              <div className='footer-player-ellipse flex flex-row justify-center items-center'>

                {selectedSong && 
                <ReactHowler
                  src={selectedSong?.preview}
                  playing={isPlaying ? true : false}
                  volume={volumeSong}
                  onEnd={pauseSong}
                />}
                {selectedSong && isPlaying ? 
                  <GiPauseButton className='text-white w-4 h-5 cursor-pointer' onClick={pauseSong}/>
                   : <FaPlay className='text-white w-4 h-5 cursor-pointer' onClick={playSongAgain}/>
                }
                
              </div>
              <AiFillStepForward className='text-white w-9 h-9 cursor-pointer' onClick={()=>nextSong(selectedSong?.id)}/>
          </div>
          <div className='flex flex-row h-full items-center gap-10 pr-8'>
               <input className='footer-slider' type='range' min={0} max={1} step={0.01} 
                value={volumeSong} 
                onChange={(e)=>setVolumeSong(parseFloat(e.target.value))}
               />
                <AiFillSound className='text-white w-8 h-8'/>
          </div>
      </div>
        ) : null}
    </div>
  )
}
