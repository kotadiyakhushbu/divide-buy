import React from 'react'
import Shooping_slider_data from './Shooping_slider_data';
import Site_all_button from '../../Site_all_button'
import { Carousel } from '@trendyol-js/react-carousel';


function Featured_Retailers_list() {

    return (
        <>

            <section className='featured retailers pb-16'>
               
                <Carousel show={4.5} slide={3} swiping={true}>
                    {
                        Shooping_slider_data.map((imgdata) => {
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