import React from 'react'
import Nav from '../components/Footer_nav'
import Footersecond from '../components/Footersecond'
import Footerimgdata from './Image/Footerimgdata'
import Shareicon from '../components/Shareicon'



export default function Footer() {

  return (
    <>

      <div className=' site_footer site__bg-color py-12'>
        <div className='site_max-width m-auto tablet:mx-5'>
          <div className="flex  text-white w-full  text-sm flex-wrap tablet:mb-10">
            <div className="phone:w-full w-1/5 tablet:w-1/4 ">
              <p className='mb-5 text-lightblue font-bold'>DivideBuy</p>
              <div>
                <ul>
                  <Nav item="About us" link="/about-us" />
                  <Nav item="Careers" link="/careers" />
                  <Nav item="News" link="/news" />
                  <Nav item="Book a Demo" link="/book-a-demo" />
                </ul>
              </div>
            </div>

            <div class=" w-1/5 tablet:w-1/4">
              <p className='mb-5 text-lightblue font-bold'>For Shoppers</p>
              <div>
                <ul>
                  <Nav item="Go Shopping" link="/shoping" />
                  <Nav item="How it Works" link="/consumers" />
                  <Nav item="Blog" link="/blog" />
                  <Nav item="Help Centre" link="/help" />
                  <Nav item="Complaints" link="/complaints" />
                </ul>
              </div>
            </div>

            <div class=" w-1/5 tablet:w-1/4">
              <p className='mb-5 text-lightblue font-bold'>For Business</p>
              <div>
                <ul>
                  <Nav item="Retail Credit Solutions" link="/retailers" />
                  <Nav item="Benefits & Features" link="/guide/introducing-dividebuy/sell-with-dividebuy/" />
                  <Nav item="Business Insights" link="/retailers/retailer-articles" />
                  <Nav item="Success Stories" link="/success-stories" />
                  <Nav item="Partnerships" link="/partnerships" />
                  <Nav item="Resources" link="/resources" />
                  <Nav item="Support" link="/support" />
                </ul>
              </div>
            </div>

            <div class=" w-1/5 tablet:w-1/4">
              <p className='mb-5 text-lightblue font-bold my_account'>My Account</p>
              <div>
                <ul>
                  <Nav item="Customer Login" link="/#" />
                  <Nav item="Merchant Login" link="/#" />
                </ul>
              </div>
            </div>

            <div class=" w-1/5  tablet:w-full">
              <p className='mb-5 text-lightblue font-bold'>Follow Us</p>
              <Shareicon  />
            </div>
          </div>

          <div className='text-white border-solid border-t border-b border-[#00B3E3]'>
            <ul className='flex justify-center my-2.5'>
              <Footersecond item="Privacy Policy" link="/privacy-policy" />
              <Footersecond item="Cookies" link="/cookies" />
              <Footersecond item="Security" link="/security" />
              <Footersecond item="Terms and Conditions" link="/terms-and-conditions" />
              <Footersecond item="Modern Slavery Act Statement" link="/modern-slavery-act-statement" />
            </ul>
          </div>

          <Footerimgdata />

          <div className='text-white text-[10px] leading-5 tracking-[0.49px]'>
            <p className='text-center'>Rematch Credit Ltd t/a DivideBuy credit agreements are not regulated by the Financial Conduct Authority and
              do not fall under the jurisdiction of the Financial Ombudsman Service. Credit is available to permanent UK residents aged 18+, subject to status, any missed payments may affect
              your ability to obtain credit from DivideBuy and other lenders. Please spend responsibly.</p>
            <p className='text-center'>Rematch Credit Limited registered and trading at First Floor, Brunswick Court, Brunswick Street,</p>
            <p className='text-center'>Newcastle-under-Lyme, ST5 1HH. Company number 08097204. VAT Number 164 4736 93.</p>
            <p className='text-center my-2.5'>Copyright © 2023 Rematch Credit Ltd. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </>
  )
}
