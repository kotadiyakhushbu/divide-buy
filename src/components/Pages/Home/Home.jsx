import React from 'react'
import Home_banner from './Home_banner'
import Featured_Retailers_list from './Featured_Retailers_list'
import Blog_list from '../../Blog/Blog_list'
import And_whats_more from './And_whats_more'
import Business from './Business'
import FAQ_list from './FAQ_list'

export default function Home() {
  return (
    <>
      <section className='home'>
        <Home_banner />
          <Featured_Retailers_list />
        <And_whats_more />
        <Business />
        <div className=' max-w-[1280px] m-auto'>
          <Blog_list />
        </div>
        <FAQ_list />
      </section>
    </>
  )
}
