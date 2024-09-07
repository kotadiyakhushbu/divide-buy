import React from 'react'
import { Link } from "react-router-dom";

export default function Site_all_button(props) {
    return (
        <>
            <div className='text-white bg-[#002F6D]  shadow-[0px_3px_6px_0px_rgba(0,0,0,0.16)] inline-block rounded-[5px] py-2 px-8 hover:bg-[#01b9ff]'><Link to={props.link} className=''>{props.item}</Link></div>
        </>
    )
}
