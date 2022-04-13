import React from 'react'
import { AsideMenu } from '../../components/MainPage/AsideMenu/AsideMenu'
import { Footer } from '../../components/MainPage/Footer/Footer'
import { MainContent } from '../../components/MainPage/MainContent/MainContent'

export const MainView = () => {
  return (
<>
 <div className='flex flex-col'>
  <div className='flex flex-row relative'>
      <AsideMenu/>
      <MainContent/>
    </div>
  <Footer/>
 </div>
</>
  )
}
