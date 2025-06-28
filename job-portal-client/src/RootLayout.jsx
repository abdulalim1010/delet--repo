import React from 'react';
import { Outlet } from 'react-router';
import Header from './pages/Home/Header';
import Footer from './pages/Home/Footer';

const RootLayout = () => {
  return (
    <div>
      <Header/>
      <div>
       
<Outlet/> 
</div>

<Footer/>

    </div>
  );
};

export default RootLayout;