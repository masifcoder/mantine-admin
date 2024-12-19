import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidenav from '../components/Sidenav'

function Layout() {
  return (
    <div className='container mx-auto py-4'>
      <div className='grid grid-cols-1 md:grid-cols-[260px_1fr] gap-5'>
        <div className='h-screen'>
          <aside>
            <Sidenav />
          </aside>
        </div>
        <div className='bg-stone-50'>
          <main>
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  )
}

export default Layout