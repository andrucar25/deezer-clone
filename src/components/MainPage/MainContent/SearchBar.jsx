import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai';
import {FaUser} from 'react-icons/fa';

import './styles/mainContent.css'

export const SearchBar = () => {
  return (
    <div className='flex flex-row w-full h-9 justify-between'>
            <div className='relative flex items-center' >
                  <input 
                  type="song" 
                  name="song"
                  placeholder="Buscar"
                  className='input-search pr-7 pl-4 py-1 font-semibold'
                  />
                <AiOutlineSearch className='icon-search absolute right-3' />
            </div>

            <div className='flex flex-row h-full items-center'>
                <FaUser className='icon-user mr-2'/>
                <p>Francisco M.</p>
            </div>
    </div>
  )
}
