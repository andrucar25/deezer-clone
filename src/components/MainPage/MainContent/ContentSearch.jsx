import React from 'react'
import { useSelector } from 'react-redux'
import { ResultContentSearch } from './ResultContentSearch/ResultContentSearch'
import { FirstResult } from './Search/FirstResult'

export const ContentSearch = () => {

  const {songs, initial} = useSelector((state) => ({...state.song}))

  if(initial){
    return null
  }
  return (
    <div className='flex flex-col gap-10 h-full w-full '>
     {songs?.length === 0 ? (
        <div className=''>
          <p>No se encontraron resultados para la búsqueda</p>
        </div>
        ) : (
          <>
            <FirstResult song={songs[0]}/>
            <ResultContentSearch songs={songs}/>
          </>
        )}
    </div>
  )
}
