import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Category from './Category';
import Main from './main';

const AllRoutes = () => {
    return (
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/category" element={<Category/>} />
          <Route path="/flashsale" element={<>Hello</>} />
          <Route path="/bestdeals" element={<>Hello</>} />
          <Route path="/shopbrand" element={<>Hello</>} />
          <Route path="/trending" element={<>Hello</>} />
          <Route path="/new" element={<>Hello</>} />
          
        </Routes>
      );
}

export default AllRoutes