import React from 'react'
import './styles/footer.css'

import {AiFillStepBackward, AiFillStepForward, AiFillSound} from 'react-icons/ai';
import {FaPlay} from 'react-icons/fa';

export const Footer = () => {
  return (
    <div className='footer-player w-screen h-24 absolute bottom-0 left-0'>
        <div className='flex flex-row justify-between w-full h-full'>
            <div className='h-full flex flex-row gap-5'>
                <div className='h-full w-28'>
                    <img className='h-full w-full' src={'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/120x120-000000-80-0-0.jpg'}/>
                </div>
                <div className='flex flex-col justify-center h-full'>
                  <p className='footer-artist-song'>Cancion</p>
                  <p className='footer-artist'>Artista - Album</p>
                </div>
            </div>

            <div className='flex flex-row h-full items-center gap-6'>
                <AiFillStepBackward className='text-white w-9 h-9 cursor-pointer'/>
                <div className='footer-player-ellipse flex flex-row justify-center items-center'>
                  <FaPlay className='text-white w-4 h-5 cursor-pointer'/>
                </div>
                <AiFillStepForward className='text-white w-9 h-9 cursor-pointer'/>
            </div>
            <div className='flex flex-row h-full items-center gap-10 pr-8'>
                  <p>Sonido</p>
                  <AiFillSound className='text-white w-8 h-8'/>
            </div>
        </div>
    </div>
  )
}
