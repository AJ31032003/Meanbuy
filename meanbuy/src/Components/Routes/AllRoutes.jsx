import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Category from './Category';
import Flashsale from './flashsale';
import Main from './main';
import Search from './Search';
import Single from './Single';

const AllRoutes = () => {
    return (
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/category" element={<Category/>} />
          <Route path="/flashsale" element={<Flashsale/>} />
          <Route path="/bestdeals" element={<>Hello</>} />
          <Route path="/shopbrand" element={<>Hello</>} />
          <Route path="/trending" element={<>Hello</>} />
          <Route path="/new" element={<>Hello</>} />
          <Route path="/search" element={<Search/>} />
          <Route path="/category/:product_id" element={<Single/>}/>
          
        </Routes>
      );
}

export default AllRoutes