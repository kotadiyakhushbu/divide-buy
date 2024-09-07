 import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav(props) {
    return (
        <>
            <li className='mb-1.5 py-1.5'>
                <Link to={props.link} className='py-1.5'>{props.item}</Link>
            </li>
        </>
    )
}
