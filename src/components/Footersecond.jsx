import React from 'react'

export default function Footersecond(props) {
    return (
        <>
            <li>
                <a href={props.link} className='mx-5'>{props.item}</a>
            </li>
        </>
    )
}
