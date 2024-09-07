import React from 'react'
import { Link } from 'react-router-dom'

export default function Myaccount() {
    return (
        <>
            <div className='my_account relative'>
                <div className='text-lg font-bold text-lightblue'>My Account
                    <i className="fa fa-angle-down ml-2.5" aria-hidden="true"></i>
                </div>
                <div className='z-[1] login_details rounded absolute right-0 w-full min-w-[200px]  right-[3%] bg-[white] border-solid border-[#00000026] border p-4'>
                    <div className='mb-4'>
                    <Link to="/*">
                         <img  className='w-9 inline-block mr-3.5' src="images/customer__shopping.png" />Customer Login</Link>
                    </div>
                    <div>
                    <Link to="/*">
                    <img  className='w-9 inline-block mr-3.5'  src="images/merchant__shop.png" />Customer Login</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
