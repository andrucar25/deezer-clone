import React, { useState } from 'react'
import { CardResult } from './CardResult'


export const ResultContentSearch = ({songs}) => {

  return (
    <section className='flex flex-col gap-5 h-fit w-full'>
        <h2 className='result-content-title'>Resultados</h2>
        <div className='flex flex-row flex-wrap w-full h-fit gap-6'>
           {songs?.map(song => (
               <CardResult
               key={song.id}
                song={song}
               />
           ))}
        </div>
    </section>
  )
}
