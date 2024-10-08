import React from 'react'
import { Link } from "react-router-dom";

export default function Button(props) {
    return (
        <>
            <Link className={props.className} to={props.link} >{props.item}</Link>
        </>
    )
}
