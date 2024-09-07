import React from 'react'
import Site_all_button from '../../Site_all_button'


export default function Business() {
  return (
    <>
      <section className='Business pb-12'>
        <div className='relative bg-center bg-no-repeat bg-cover' style={{ backgroundImage: `url("./images/home/shutterstock_banner.jpg")` }}>
          <div className='absolute w-full  h-full top-0 left-0 bg-[#1f1f1f] opacity-50'></div>

          <div className='text-white  text-center py-24 sticky '>
            <p className='pb-6 text-3xl font-bold'>Want to sell with us?</p>
            <p className="pb-6 " >If you think interest free credit might be right for your business, then why not have a look at what we offer?</p>
            <Site_all_button link="/retailers" item="For Business" />
          </div>
        </div>
      </section>
    </>
  )
}
