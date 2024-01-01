import React from 'react'

const Signup = () => {
  return (
    <>

<div className="w-full h-screen font-sans bg-cover bg-landscape bg-emerald-300 ">
                <div className="container flex items-center justify-center flex-1 h-full mx-auto">
                    <div className="w-full max-w-lg">
                        <div className="leading-loose">
                            <form action='/' className="max-w-sm p-10 m-auto rounded shadow-xl bg-white bg-opacity-60	">
                                <p className="mb-8 text-2xl font-light text-center text-black font-bold	italic">
                                    Helpdesk System
                                </p>
                                <div className="mb-2">
                                    <div className=" relative ">
                                        <input type="text" id="login-with-bg-username" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-black-600 focus:border-transparent" placeholder="Usename" />
                                    </div>
                                </div>
                            
                                <div className="mb-2">
                                    <div className=" relative ">
                                        <input type="text" id="login-with-bg-password" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-black-600 focus:border-transparent" placeholder="password" />
                                    </div>
                                </div>

                                <div className="mb-2">
                                    <div className=" relative ">
                                        <input type="text" id="login-with-bg-email" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-black-600 focus:border-transparent" placeholder="Email" />
                                    </div>
                                </div>
                                <div className="flex items-center justify-between mt-4">
                                    <button type="submit" className="py-2 px-4  bg-blue-500 hover:bg-blue-600 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                        Sign Up
                                    </button>
                                </div>
                                
                                
                                <div className=' flex-wrap flex-row'>
                                
                                <div className='text-right   	'>
                                <a className="inline-flex text-xs font-thin text-black-500 sm:text-sm dark:text-gray-100 hover:text-gray-700 dark:hover:text-white font-bold" href='/'>
                                        Sign In
                                    </a>

                                
                                </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>



    </>
  )
}

export default Signup