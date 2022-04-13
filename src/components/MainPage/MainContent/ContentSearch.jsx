import React from 'react'
import { ResultContentSearch } from './ResultContentSearch/ResultContentSearch'
import { FirstResult } from './Search/FirstResult'

export const ContentSearch = () => {
  return (
    <div className='flex flex-col gap-10 h-full w-full '>
        <FirstResult/>
        <ResultContentSearch/>
    </div>
  )
}
