import React from 'react'
import { Route, Routes } from 'react-router-dom';
import RetailerFinance from '../components/Pages/Retailer_Finance';
import Shooping from '../components/Pages/Shopping'
import About from '../components/Pages/About_us'
import Careers from '../components/Pages/Careers';
import Blog from '../components/Pages/Blog';
import Consumers from '../components/Pages/Consumers';
import Home from '../components/Pages/Home/Home';
import Page_not_found from '../components/Pages/Page_not_found';

export default function Routerlist() {
  return (
    <>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shopping" element={<Shooping />} />
        <Route path="/retailers" element={<RetailerFinance />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/consumers" element={<Consumers />} />
        <Route path='/*' element={<Page_not_found />} />

      </Routes>
    </>
  )
}
