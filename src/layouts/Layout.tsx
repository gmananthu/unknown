import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      {/* <Navbar /> */}
      <main className="flex-1">
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
}
