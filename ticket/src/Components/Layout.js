import React from 'react'
import { Outlet } from 'react-router-dom';


const Layout = () => {
    return (
        <div>
            <div className='upper-nav-bar'>
                <nav className=" bg-emerald-500  shadow ">
                    <div className="px-8 mx-auto max-w-7xl">
                        <div className="flex items-center justify-between h-16">
                            <div className="w-full justify-between flex items-center">
                                <a className="flex-shrink-0" href="/">
                                    <i>
                                        <h2 className='text-4xl font-bold text-white'>Helpdesk</h2>
                                    </i>
                                </a>

                            </div>
                            <div className="block">
                                <div className="flex items-center ml-4 md:ml-6 text-xl font-bold">
                                    <a href='/profile' className='mx-5'>Profile</a>
                                    <a className='mx-5' href='/'>Logout</a>
                                </div>
                            </div>
                            <div className="flex -mr-2 md:hidden">
                                <button className="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
                                    <svg width="20" height="20" fill="currentColor" className="w-8 h-8" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z">
                                        </path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                </nav>
            </div>
            <div className='grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-8'>
                <div className='side-nav-bar col-span-2'>
                    <div className='side-nav-list'>
                        <ul className=' text-2xl font-bold'>
                            <li className='p-4 w-100 text-center'>
                                <a href='/dashboard'>
                                    <p>Dashboard</p>
                                </a>
                            </li>                            
                            <li className='p-4 w-100 text-center'>
                                <a href='new-ticket'>
                                    <p>New Ticket</p>
                                </a>
                            </li>                            
                            <li className='p-4 w-100 text-center'>
                                <a href='/dashboard'>
                                    <p>My Ticket</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='content-area col-span-6'>
                    <Outlet />
                </div>
            </div>
        </div>
        
    )
}

export default Layout;