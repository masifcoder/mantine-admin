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
    <div className=''>
        <div className='flex gap-3 justify-cente mb-10 px-10'>
            <Cookie /> <span className='font-bold text-red-500'>CookieBlog</span>
        </div>

        <div>
          <ul className='space-y-5'>
            {
              Links.map( (link, index) => {
                return (
                  <li onClick={() => makeActive(index)} key={index} className={`py-4 px-6 rounded ps-3 text-gray-600 ${ (activeLink == index) ? "bg-[#DA498D] border-s-3 border-s-[#510f2e] text-white": '' }  `}>
                    <NavLink to={link.path} className='flex gap-2 w-full' >  <span>{link.icon}</span> {link.title}  </NavLink>
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