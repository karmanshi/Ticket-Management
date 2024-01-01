import React from 'react'

const Profile = () => {
    return (
        <div>
            <div>
                <div className=" w-60	 relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">

                    <img className='w-20 ml-20'
                        src="data:image/png;base64,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"
                        alt="card-image" />
                    <div className="p-6">
                        <h5 className="block mb-2 font-sans text-xl antialiased text-left leading-snug tracking-normal text-blue-gray-900">
                            <p className='text-sm '>UserName</p>
                            <p className='text-sm '>Contact Number </p>
                            <p className='text-sm '>Email</p>
                            <p className='text-sm '>Department</p>
                        </h5>

                    </div>

                </div>


            </div>
            <br/>
            <br/>
            <br/>
            <div>
                <div className=" w-60	 relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
                    <p className='font-semibold'>Give your Feedback</p>
                    <button type="button" class=" bg-gray-400	 py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Loream Ipsum</button>
                    <div>


                        <div className="flex items-center ml-9">
                            <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                        </div>

                    </div>
                    <button type="button" class="text-white bg-emerald-500 hover:bg-emerald-500 focus:ring-4 focus:ring-emerald-500 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-emerald-500 dark:hover:bg-emerald-500 focus:outline-none dark:focus:ring-emerald-500">Feedback</button>


                </div>
            </div>



        </div>
    )
}

export default Profile