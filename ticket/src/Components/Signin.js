import React from 'react'

const Signin = () => {
    return (
        <>

            <div className="w-full h-screen font-sans bg-cover bg-landscape bg-emerald-500 ">
                <div className="container flex items-center justify-center flex-1 h-full mx-auto">
                    <div className="w-full max-w-lg">
                        <div className="leading-loose">
                            <form className="max-w-sm p-10 m-auto rounded shadow-xl bg-white bg-opacity-60	" action='/dashboard'>
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
                                <div className="flex items-center justify-between mt-4">
                                    <button type="submit" className="py-2 px-4 rounded bg-green-500 hover:bg-green-500 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-md  " >
                                        Sign In
                                    </button>
                                    

                                </div>


                                <div className=' flex-wrap flex-row'>
                                    <div className="flex ml-auto m-8">
                                        <a href="/reset-password" className="inline-flex text-xs font-thin  sm:text-sm dark:text-gray-100 hover:text-gray-700 dark:hover:text-white font-bold text-red-700		">Forgot Password</a>
                                    </div>



                                    <div className='text-right   	'>
                                        <a href = "/register" className="inline-flex text-xs font-thin text-black-500 sm:text-sm dark:text-gray-100 hover:text-gray-700 dark:hover:text-white font-bold">
                                            Sign Up
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

export default Signin