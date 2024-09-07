import React,{useState,useEffect } from 'react'
import { Link } from "react-router-dom";

 const Header_shoping_nav =(props) => {
  
  useEffect(() => {
    Clickbtn();
  }, [])

  function Clickbtn() {
 
     const bb = document.getElementsByClassName("login_details");
     console.log(bb);
     console.log("khushbu");
  }
    return (
        <>
      
            <li className='mb-1.5 py-1.5 navlinkhide'>
                <Link className={props.className} to={props.link} onClick={Clickbtn}> {props.item}</Link>
            </li>
      
            
        </>
    )
}

export default Header_shoping_nav;

