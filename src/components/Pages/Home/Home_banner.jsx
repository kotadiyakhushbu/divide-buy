import React from 'react'
import Button from '../../Button'

export default function Home_banner() {
    return (
        <>
            <section className='pb-16'>
                <div className='relative text-[white]' >
                    <img src="images/home/new-home-banner.jpg" />
                    <div className='absolute  w-full flex inset-0 max-w-[1280px] m-auto items-center' >
                        <div className='w-[50%] top-1/2'>
                            <h1 className='text-[50px]'>Spread  the cost.</h1>
                            <h1 className='text-[50px]' >Interest Free.</h1>
                            <p className='mb-8'>Shop with some of your favourite high-end and specialist brands, and pay in a way to suit you.</p>
                            <div>
                                <Button className='font-bold mr-4 rounded-md py-2 px-8 shadow-[0px_3px_6px_0px_rgba(0,0,0,0.16)] bg-[#4D8FCF] hover:bg-[white] hover:text-[#002F6D]' item="Start Shopping" link="/shopping" />
                                <Button className='font-bold rounded-md py-2 px-8 shadow-[0px_3px_6px_0px_rgba(0,0,0,0.16)] bg-[#002F6D] hover:bg-[white] hover:text-[#002F6D]' item="Sell with DivideBuy" link="/retailers" />
                            </div>
                        </div>
                        <div className='w-[50%]' >
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
