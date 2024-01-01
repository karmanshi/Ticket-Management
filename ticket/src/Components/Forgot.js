import React from 'react'

const Forgot = () => {
  return (
    <>
    <div className="w-full h-screen font-sans bg-cover bg-landscape bg-emerald-300  ">
                <div className="container flex items-center justify-center flex-1 h-full mx-auto">
                    <div className="w-full max-w-lg">
                        <div className="leading-loose">
                            <form action='/' className="max-w-sm p-10 m-auto rounded shadow-xl bg-white bg-opacity-60	">
                                <p className="mb-8 text-sm font-medium	font-sans font-light text-center text-black ">
                                Don't worry, Enter your email below and we will send you a link to change password.
                                </p>
                                <div className="mb-2">
                                    <div className=" relative ">
                                        <input type="text" id="login-with-bg-email" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-black-600 focus:border-transparent" placeholder="Email" />
                                    </div>
                                </div>
                                <div className="flex items-center justify-between mt-4">
                                    <button type="submit" className="py-2 px-4 rounded bg-green-500 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-md  " >
                                        Submit
                                    </button>
                                    

                                </div>
                                <div className="flex items-center justify-between mt-4">
                                    <button type="submit" className="py-2 px-4  bg-blue-500 hover:bg-blue-600 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                        Sign In
                                    </button>
                                </div>
                                


                                
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>




    </>
  )
}

export default Forgot