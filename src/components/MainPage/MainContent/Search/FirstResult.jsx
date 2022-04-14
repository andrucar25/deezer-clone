import React from 'react'
import { ButtonFirstResult } from '../atoms/buttons/ButtonFirstResult'

import {FaEllipsisH} from 'react-icons/fa';
import { CoverPlay } from '../atoms/coverplay/CoverPlay';


export const FirstResult = ({song}) => {

    const {album, artist} = song;

  return (
    <article className='content-first-result flex flex-row'>

             <CoverPlay
                classContainer='w-72 h-full relative'
                classImg='h-full'
                classPlay='h-20 w-16'
                img={album?.cover_medium}
                song={song}
             /> 
           
        <div className='content-first-background h-full w-full py-8 px-8 relative overflow-hidden'>
            <div className='content-first-backcontainer w-full absolute left-0 top-0 -z-10'>
                <img 
                className='first-result-backimg w-full h-full opacity-20' 
                src={artist?.picture_big}
                />
            </div>
            <div className='flex flex-col'>
                <p className='first-result-title'>{album?.title}</p>
                <div className='flex flex-row gap-4 items-end'>
                    <p className='first-result-subtitle'>Lo mejor de {artist?.name}</p>
                    <p className='first-result-fans'>321,123 seguidores</p>
                </div>
            </div>
            <div className='w-full pt-5'>
                <p className='first-result-artist'>(La api no provee descripcion detalla del artista)Adele Laurie Blue Adkins (Tottenham, Londres, Inglaterra, 5 de mayo de 1988), conocida simplemente como Adele, es una cantante, compositora y multinstrumentista británica.</p>
            </div>
            <div className='flex flex-row pt-10 gap-5 w-full items-center'>
                <ButtonFirstResult
                    url={song?.link}
                    text='Reproducir'
                    className='button-background'
                    
                />
                <ButtonFirstResult
                    url={song?.artist?.link}
                    text='Seguir'
                    className='button-no-background'
                />
                  <a href={song?.artist?.link} target='_blank'>
                      <FaEllipsisH className='text-white w-4 cursor-pointer' />
                </a>
              
            </div>
           
        </div>
    </article>
  )
}
