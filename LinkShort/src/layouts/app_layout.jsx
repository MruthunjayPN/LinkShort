import React from 'react'
import { Outlet } from 'react-router'
import Header from '../components/header'

const Applayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-200">
        <main className='container flex-grow'>
          <Header />
          <Outlet />
        </main>
        <footer className='text-center mt-10 p-10 h-3 bg-white'>
          Made with love!
        </footer>
    </div>
  )
}

export default Applayout