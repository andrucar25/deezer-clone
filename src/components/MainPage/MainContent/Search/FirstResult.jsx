import React from 'react'
import { ButtonFirstResult } from '../atoms/buttons/ButtonFirstResult'

import {FaEllipsisH} from 'react-icons/fa';
import { CoverPlay } from '../atoms/coverplay/CoverPlay';

export const FirstResult = () => {
  return (
    <article className='content-first-result flex flex-row'>

             <CoverPlay
                classContainer='w-72 h-full relative'
                classImg='h-full'
                classPlay='h-20 w-16'
                img='https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/250x250-000000-80-0-0.jpg'
             /> 
           
        <div className='content-first-background h-full w-full py-8 px-8 relative overflow-hidden'>
            <div className='content-first-backcontainer w-full absolute left-0 top-0 -z-10'>
                <img className='first-result-backimg w-full h-full opacity-25' src={'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/500x500-000000-80-0-0.jpg'}/>
            </div>
            <div className='flex flex-col'>
                <p className='first-result-title'>Adele 21</p>
                <div className='flex flex-row gap-4 items-end'>
                    <p className='first-result-subtitle'>Lo mejor de Adele</p>
                    <p className='first-result-fans'>321,123 seguidores</p>
                </div>
            </div>
            <div className='w-full pt-5'>
                <p className='first-result-artist'>Adele Laurie Blue Adkins (Tottenham, Londres, Inglaterra, 5 de mayo de 1988), conocida simplemente como Adele, es una cantante, compositora y multinstrumentista británica.</p>
            </div>
            <div className='flex flex-row pt-10 gap-5 w-full items-center'>
                <ButtonFirstResult
                    text='Reproducir'
                    className='button-background'
                />
                <ButtonFirstResult
                    text='Seguir'
                    className='button-no-background'
                />
                <FaEllipsisH className='text-white w-4'/>
            </div>
           
        </div>
    </article>
  )
}
