import React, { useState } from 'react'

import { Milestone, UsersRound, CopyPlus, Cookie, House } from 'lucide-react';
import { NavLink } from 'react-router-dom';

function Sidenav() {
  const [activeLink, setActiveLink] = useState(0);
  const Links = [
    {title: "Dashboard", icon:<House />, path: '/' },
    {title: "Posts", icon:<Milestone />, path: '/posts' },
    {title: "Categories", icon:<CopyPlus />, path: '/categories' },
    {title: "Users", icon:<UsersRound />, path: '/users' },
  ];

  const makeActive = (index) => {
      setActiveLink(index);
  }


  return (
    <div className='p-4'>
        <div className='flex gap-3 justify-cente mb-10'>
            <Cookie /> <span className='font-bold text-red-500'>CookieBlog</span>
        </div>

        <div>
          <ul className='space-y-5'>
            {
              Links.map( (link, index) => {
                return (
                  <li onClick={() => makeActive(index)} key={index} className={` p-3 rounded ps-3 text-gray-600 ${ (activeLink == index) ? "bg-red-200 border-s-2 border-s-red-800 text-gray-500": '' }  `}>
                    <NavLink to={link.path} className='flex gap-2' >  <span>{link.icon}</span> {link.title}  </NavLink>
                  </li>
                )
              })
            }
          </ul>
        </div>

    </div>
  )
}

export default Sidenav