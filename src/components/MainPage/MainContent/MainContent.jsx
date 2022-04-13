import React from 'react'
import { ContentSearch } from './ContentSearch'
import { SearchBar } from './SearchBar'

export const MainContent = () => {
  return (
    <div className='w-screen h-screen pt-8 px-8 pb-64 overflow-scroll'>
      <div className='flex flex-col gap-10 w-full'>
        <SearchBar/>
        <ContentSearch/>
      </div>
    </div>
  )
}
