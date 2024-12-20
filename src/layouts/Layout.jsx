import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidenav from '../components/Sidenav'
import Topbar from '../components/Topbar'

function Layout() {
  return (
    <div className='container mx-auto px-4'>
      <div className='grid grid-cols-1 md:grid-cols-[280px_1fr] gap-5'>
        <div className='h-screen bg-slate-100 py-10'>
          <aside>
            <Sidenav />
          </aside>
        </div>
        <div className=''>
          <Topbar />
          <main className='pb-3 px-4 sm:pb-10'>
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  )
}

export default Layout