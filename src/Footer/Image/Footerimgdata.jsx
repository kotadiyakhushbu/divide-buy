import React from 'react'
import Imgdata from './Imagedata'

function Boximage() {
    
    return (
        <>
            <div className='flex p-2.5 tablet:flex-wrap tablet:justify-center'>
                {
                    Imgdata.map((cur) => {
                        return <>
                            <div className='p-2.5 phone:w-3/6 tablet:w-1/4 w-[11.11%]'>
                                <a href="/book-a-demo"><img src={cur.img} alt="not image show" /></a>
                            </div>
                        </>
                    })
                }
            </div>
        </>
    )
}

export default Boximage;