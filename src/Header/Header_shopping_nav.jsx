import React from 'react';
import Header_nav from '../components/Header_nav';

export default function Headernav() {
    
  
    return (
        
        <>
            <div className="z-[1] login_details absolute bg-[white] py-5  fixed  translate-y-[2%] flex translate-x-[-18%]" >
                <div className='w-[25%] pl-12 border-r border-solid border-[#e0e0e0]'>
                    <Header_nav  item="Go Shopping" link="/shopping" />
                    <Header_nav className="font-normal" item="How it Works" link="/consumers" />
                    <Header_nav className="font-normal" item="Blog" link="/blog" />
                    <Header_nav className="font-normal" item="Help Centre" link="/khushbu" />
                    <Header_nav className="font-normal" item="My Account" link="/khushbu" />
                    <Header_nav className="font-normal" item="My Account" link="/khushbu" />
                </div>
                <div className='w-[33.33%] pl-12 border-r border-solid border-[#e0e0e0]'>
                    <Header_nav item="Store Categories" link="/khushbu" />
                    <Header_nav className="font-normal" item="Home Furnishings" link="/khushbu" />
                    <Header_nav className="font-normal" item="Baby & Child" link="/khushbu" />
                    <Header_nav className="font-normal" item="Home Improvements & DIY" link="/khushbu" />
                    <Header_nav className="font-normal" item="Electrical & Appliances" link="/khushbu" />
                    <Header_nav className="font-normal" item="Garden & Outdoor" link="/khushbu" />
                </div>
                <div className='w-[41.66%] pl-12'>
                    <p>Featured retailers</p>
                    <div className='flex'>
                        <div className='font-normal'>
                            <img className='w-full max-w-[160px] h-[140px] my-4' src="images/simba-sleep-perfect-digital-marketing.png" alt="not image show" />
                            <p className='font-bold'>Simba</p>
                            <p className='text-xs text-[#939393] mb-2 '>Furniture & Homewares</p>
                            <p>Meet our fabulous new retailer, Simba Mattress!</p>
                        </div>
                        <div className='font-normal'>
                            <img className='w-full max-w-[160px] h-[140px] my-4 ml-4' src="images/Plumbworld-perfect-digital-marketing.png" alt="not image show" />
                            <p className='font-bold'>Plumbworld</p>
                            <p className='text-xs text-[#939393] mb-2'>DIY & Home Improvement</p>
                            <p>Complete renovation or small update? Plumbworld has you covered.</p></div>
                    </div>
                </div>
            </div>
        </>
    )
}
