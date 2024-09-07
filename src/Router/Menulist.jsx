import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Header_shopping_nav from '../Header/Header_shopping_nav'
import Header_business_nav from '../Header/Header_business_nav';


export default function Menulist() {

  return (

    <>
    
      <nav>
        <ul className='flex px-5'>
          <div className='my_account'>
            <li>
              <Link   className='px-5 hover:text-[#ddd] pb-5' to="/shopping">For Shoppers</Link>
            </li>
           <Header_shopping_nav />
          </div>
          
          <div className='my_account'>
            <li>
              <Link className='px-5 hover:text-[#ddd] pb-5' to="/#">For Business</Link>
            </li>
            <Header_business_nav />
          </div>
        </ul>
      </nav>
    </>
  )
}
