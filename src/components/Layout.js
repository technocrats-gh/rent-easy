import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./header";
import { Footer } from "./footer";
import '../Styles/layout.scss'

const Layout = () => {

  return (
    <div className='home-page'>
      <div>
        <Header />
      </div>
      <main className="main-content">
        <Outlet />
      </main>
      <div className="mt-3">
        <Footer />
      </div>
    </div>)
}

export default Layout;