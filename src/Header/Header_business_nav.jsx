import React from 'react'
import Header_nav from '../components/Header_nav';

export default function Header_business_nav() {

    return (
    <>
            <div className="z-[1] login_details absolute bg-[white] py-5 fixed  translate-y-[2%] flex translate-x-[-18%]" >
                <div className='w-[25%] pl-12 border-r border-solid border-[#e0e0e0]'>
                    <Header_nav item="DivideBuy for your Business" link="/retailers" />
                    <Header_nav className="font-normal" item="Sell with DivideBuy" link="/khushbu" />
                    <Header_nav className="font-normal" item="Success Stories" link="/khushbu" />
                    <Header_nav className="font-normal" item="About DivideBuy" link="/khushbu" />
                    <Header_nav className="font-normal" item="Book a Demot" link="/khushbu" />
                    <Header_nav className="font-normal" item="My Account" link="/khushbu" />
                </div>
                <div className='w-[25%] pl-12 border-r border-solid border-[#e0e0e0]'>
                    <Header_nav item="Resources" link="/khushbu" />
                    <Header_nav className="font-normal" item="Knowledge Base" link="/khushbu" />
                    <Header_nav className="font-normal" item="Assets" link="/khushbu" />
                    <Header_nav className="font-normal" item="News" link="/khushbu" />
                </div>
                <div className='w-[25%] pl-12 border-r border-solid border-[#e0e0e0]'>
                    <Header_nav item="Support" link="/khushbu" />
                    <Header_nav className="font-normal" item="Technical Support Base" link="/khushbu" />
                    <Header_nav className="font-normal" item="Contact Us" link="/khushbu" />
                    <Header_nav className="font-normal" item="FAQS" link="/khushbu" />
                </div>
                <div className='w-[25%] pl-12 pr-6'>
                    <p>What’s new?</p>
                    <img className='w-full db_loho_max-width h-[140px] my-4' src="images/simba-sleep-perfect-digital-marketing.png" alt="not image show" />
                    <p>Driving more sales…</p>
                    <p>Retailer Article</p>
                    <p>Read our top tips on driving more sales to your website</p>
                </div>
            </div>
            </>
            )
}
