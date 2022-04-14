import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai';
import {FaUser} from 'react-icons/fa';
import { useSearch } from './hooks/useSearch';

import './styles/mainContent.css'

export const SearchBar = () => {

  const {setSearch,search,getSongsApi, setInitialMessageFalse} = useSearch();

  const searchSong = () =>{
    setInitialMessageFalse()
    getSongsApi(search);

  }


  return (
    <div className='flex flex-row w-full h-9 justify-between'>
            <div className='relative flex items-center' >
                  <input 
                  onChange={e=>setSearch(e.target.value)}
                  type="text" 
                  name="search"
                  placeholder="Buscar"
                  className='input-search pr-7 pl-4 py-1 font-semibold'
                  />
                <AiOutlineSearch 
                  onClick={searchSong}
                  className='icon-search absolute right-3' 
                />
            </div>

            <div className='flex flex-row h-full items-center'>
                <FaUser className='icon-user mr-2'/>
                <p>Francisco M.</p>
            </div>
    </div>
  )
}
