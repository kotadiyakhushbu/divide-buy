import React from 'react'

export default function And_whats_more_data(props) {
    return (
        <>
            <div className='w-[90%] '>
                <img className='pb-4' src={props.img} />
                <p className='font-bold pb-2.5 '>{props.title}</p>
                <p>{props.desc}</p>
            </div>
        </>
    )
}
