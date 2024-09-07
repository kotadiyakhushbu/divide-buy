import React from 'react'
import Myaccount from '../components/Myaccount'
import Menulist from '../Router/Menulist'
import { Link } from 'react-router-dom'

export default function Heder() {
    return (
        <>
            <div className='site_header__bg-color w-full top-0 left-0 flex border-b border-solid border-[#e9e9e9]'>
                <div className=' site_max-width m-auto w-full flex items-center p-2'>
                    <div className='max-w-[18%] w-full'><Link to="/"><img className='w-full db_loho_max-width' src="images/dividebuy-logo-full-colour-rgb-scaled.jpeg" alt="not image show" /></Link></div>
                    <div className='max-w-[41%] w-full text-darkblue font-bold'>
                        <Menulist />
                    </div>
                    <div className='mr-3 max-w-[41%] w-full text-end flex justify-end'>
                        <div><a className=' pr-24 text-lg font-bold bg-clip-text decoration-transparent bg-[-webkit-linear-gradient(180deg, #60594C 0%, #BEB199 100%)]' href="#">Summer Inspiration</a></div>
                        <Myaccount />
                        <i className="fa fa-wheelchair absolute right-0 top-0 p-2.5 bg-[#4054b2] text-white text-3xl" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
        </>
    )
}
