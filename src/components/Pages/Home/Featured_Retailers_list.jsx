import React from 'react'
import Featured_Retailers from './Featured_Retailers'
import Site_all_button from '../../Site_all_button'
import { Carousel } from '@trendyol-js/react-carousel';


function Featured_Retailers_list() {

    return (
        <>

            <section className='featured retailers pb-16'>
                <div className='flex justify-between pb-16 max-w-[1280px] m-auto'>
                    <h2 className='text-darkblue font-bold text-4xl'>Shop with brands you know & love - featured retailers</h2>
                    <Site_all_button item="View All" link="/shopping" />
                </div>

                <Carousel show={4.5} slide={3} swiping={true}>
                    {
                        Featured_Retailers.map((imgdata) => {
                            let Background = imgdata.img;
                            return <>
                                <p></p>
                                <div className='w-[250px] mr-6'>
                                    <div className='relative featured-box'>
                                        <div className='h-[315px] rounded-[10px] bg-cover' style={{ backgroundImage: `url("${Background}")`, backgroundPosition: 'bottom center' }}></div>
                                        <img className='absolute top-2/4 left-2/4 max-h-[70px]' style={{ transform: `translate(-50%, -50% )` }} src={imgdata.logo} alt='img not found' />
                                    </div>
                                </div>
                            </>
                        })
                    }
                </Carousel>

            </section>
        </>
    )
}
export default Featured_Retailers_list;