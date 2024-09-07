import React from 'react'
import Blog_list_data from './Blog_list_data'
import { Link } from 'react-router-dom'
import Site_all_button from '../Site_all_button'
import Carousel from '@itseasy21/react-elastic-carousel';

export default function Blog_list() {

  return (
    <>
      <section className='blog pb-16'>
        <div className='blog text-center pb-5  text-darkblue'>
          <h1 className='text-5xl font-bold pb-5' >DivideBuy Blog</h1>
          <p className='text-lg font-normal pb-5'>All the latest news and updates, straight from DivideBuy HQ.</p>
        </div>
        <div className='flex items-center flex-col'>
          <Carousel className="mb-8" itemsToShow={3}>

        
              {
                Blog_list_data.map((blogdata) => {
                  return <>

                    <div className='w-[330px] rounded-lg shadow-[0px_3px_6px_0px_rgba(0,0,0,0.16)] mr-11 mb-4'>
                      <img className='rounded-t-lg' src={blogdata.img} />
                      <div className='p-5'>
                        <div className='flex justify-between items-center pb-3'>
                          <div className='bg-[#FF994D] rounded-[5px] py-1.5 px-2 text-center text-white'>{blogdata.post_type}</div>
                          <div className='text-[#707B8C]'>{blogdata.date}</div>
                        </div>
                        <h2 className='text-darkblue font-semibold text-lg hover:text-lightblue pb-3'><Link to={blogdata.page_link} className=''>{blogdata.page_title}</Link></h2>
                        <p className='text-darkblue text-sm font-normal pb-3' >{blogdata.page_contain}</p>
                      </div>
                    </div>

                  </>
                })
              }
           
          </Carousel>
          <Site_all_button item="View All" link="/blog" />
        </div>
      </section>
    </>
  )
}
