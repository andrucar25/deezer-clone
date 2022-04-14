import React from 'react'
import './styles/asideMenu.css'

import logo from '../../../assets/foxbel-music.png'

export const AsideMenu = () => {
  return (
    <aside className='aside pt-12'>
        <div className='h-full w-full '>
            <div className='h-fit w-full px-10'>
                <img src={logo} className='w-full' alt='logo'/>
            </div>
            <div className='h-full w-full'>
               <div className='flex flex-col gap-1 pt-7'>
                    <p className='aside-title'>Mi Librería</p>
                    <p className='aside-select-category'>Recientes</p>
                    <p className='aside-category'>Artistas</p>
                    <p className='aside-category'>Álbums</p>
                    <p className='aside-category'>Canciones</p>
                    <p className='aside-category'>Estaciones</p>
               </div>

               <div className='flex flex-col gap-1 pt-7'>
                    <p className='aside-title'>Playlist</p>
                    <p className='aside-category'>Metal</p>
                    <p className='aside-category'>Para bailar</p>
                    <p className='aside-category'>Rock 90s</p>
                    <p className='aside-category'>Baladas</p>
               </div>
            </div>
        </div>
    </aside>
  )
}
