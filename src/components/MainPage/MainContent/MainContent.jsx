import React from 'react'
import { useSelector } from 'react-redux'
import { LoadingSpinner } from '../../Loader/Spinner'
import { ContentSearch } from './ContentSearch'
import { SearchBar } from './SearchBar'

export const MainContent = () => {

  const {isLoading} = useSelector((state) => ({...state.song}))

  return (
    <div className='w-screen h-screen pt-8 px-8 pb-64 overflow-scroll'>
      <div className='flex flex-col gap-10 w-full'>
        <SearchBar/>

        {isLoading ? (
          <div className='w-full h-full flex flex-row justify-center'>
            <LoadingSpinner/>
          </div>
        ) :<ContentSearch/>}
      </div>
    </div>
  )
}
