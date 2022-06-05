import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const SideBar = () => {
  const menu = [
    {
      name: 'Dashboard',
      path: '/'
    },
    {
      name: 'Categories',
      path: '/categories'
    },
    {
      name: 'Transactions',
      path: '/transactions'
    },
    {
      name: 'Calendar',
      path: '/calendar'
    },
    {
      name: 'Events',
      path: '/events'
    },
    {
      name: 'Settings',
      path: '/settings'
    }
  ]

  const navigate = useNavigate()

  return (
    <div className=''>
      {/* Title */}
      <div className='cursor-pointer'
        onClick={() => {navigate('./')}}
      >
        <span className='font-poppins text-5xl font-semibold'>T</span>
        <span className='font-poppins text-3xl font-semibold'>racker</span>
      </div>

      {/* Menu */}
      <div className='flex flex-col mt-16 gap-4'>
        {menu.map((item) => (
          <div
            key={item.name}
            className=''>
            <NavLink
              to={item.path}
            >
              {({isActive}) => (
                <span className={`text-xl font-poppins font-medium ${isActive ? 'text-gray-500' : 'text-gray-300'}`}>
                  {item.name}
                </span>
              )}
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SideBar