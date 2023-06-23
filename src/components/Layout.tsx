import React, { FC, ReactNode } from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import BlogAuthor from './BlogCard/BlogAuthor';

interface LayoutProps {
  children: ReactNode;
}
  
  const Layout: FC<LayoutProps> = (props) => {
  const { children } = props;
  return (
    <>
      <main className="font-sans bg-gradient-to-b from-gray-700 to-gray-900 min-h-screen text-white">
        <Navbar/>
        {children}
        <Footer/>
      </main> 
    </>
  )
}

export default Layout