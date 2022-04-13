import React, { useState } from 'react'
import { CardResult } from './CardResult'


const result=[
    {
        artist:'Michael Jackson',
        album:'Bad',
        img:'https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/250x250-000000-80-0-0.jpg'
    },
    {
        artist:'Michael Jackson',
        album:'Bad',
        img:'https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/250x250-000000-80-0-0.jpg'
    },
    {
        artist:'Michael Jackson',
        album:'Bad',
        img:'https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/250x250-000000-80-0-0.jpg'
    },
    {
        artist:'Michael Jackson',
        album:'Bad',
        img:'https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/250x250-000000-80-0-0.jpg'
    },
    {
        artist:'Michael Jackson',
        album:'Bad',
        img:'https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/250x250-000000-80-0-0.jpg'
    },
    {
        artist:'Michael Jackson',
        album:'Bad',
        img:'https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/250x250-000000-80-0-0.jpg'
    },
    {
        artist:'Michael Jackson',
        album:'Bad',
        img:'https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/250x250-000000-80-0-0.jpg'
    },
    {
        artist:'Michael Jackson',
        album:'Bad',
        img:'https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/250x250-000000-80-0-0.jpg'
    },
    {
        artist:'Michael Jackson',
        album:'Bad',
        img:'https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/250x250-000000-80-0-0.jpg'
    }
]

export const ResultContentSearch = () => {

    const [songs, setSongs] = useState(result)

    console.log(songs)
  return (
    <section className='flex flex-col gap-5 h-fit w-full'>
        <h2 className='result-content-title'>Resultados</h2>
        <div className='flex flex-row flex-wrap w-full h-fit gap-6'>
           {songs.map(song => (
               <CardResult
                song={song}
               />
           ))}
        </div>
    </section>
  )
}
