import React from 'react'
import { Link } from "react-router-dom";
import Faq_componet from './Faq_componet';


export default function FAQ_list() {
    return (
        <>
            <section className='faqlist bg-[#f5f5f5]'>
                <div className='max-w-[1280px] m-auto text-darkblue py-12'>
                    <div className='flex'>
                        <div className='max-w-[40%] w-full'>
                            <h2 className='pb-6 text-2xl font-bold'>Support</h2>
                            <h1 className='pb-6 text-3xl font-bold'>FAQs & Helpful Links</h1>
                            <p className='text-lg font-normal pb-8'>Everything you need to know about the product and billing. Can’t find the answer you’re looking for? Please<br></br> <Link to='/help' className='underline hover:text-lightblue' >chat to our friendly team</Link></p>
                            <div className='bg-[white] text-center rounded-lg p-5 shadow-[0px_3px_6px_0px_rgba(0,0,0,0.16)] '>
                                <img src="images/home/More_Support_icon.png " className='m-auto' alt='img not found' />
                                <h1 className='font-bold'>More Support</h1>
                                <p>Not found the answers you’re looking for? Visit our resource centre for more help.</p>
                            </div>
                        </div>
                        <div className='max-w-[60%] w-full pl-16'>
                        <Faq_componet />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
