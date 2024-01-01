import React from 'react'

const Dashboard = () => {
  return (
    <div>
      <div className='mt-2 w-full text-center'>
        <h2 className='text-4xl font-bold'>Dashboard</h2>
      </div>
      <div className='grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4'>
        <div className=" w-full bg-blue-300	 shadow-md  shadow-gray-400/50	 mt-6 text-gray-700 shadow-md bg-clip-border rounded-xl w-96 p-2">
          <div className='my-4 w-full text-center'>
            <h1>Total Ticket</h1>
            <div className='text-7xl font-bold'>12</div>
          </div>

        </div>
        <div className=" w-full bg-green-300	 shadow-md  shadow-gray-400/50	 mt-6 text-gray-700 shadow-md bg-clip-border rounded-xl w-96 p-2">
          <div className='my-4 w-full text-center'>
            <h1>Total Solved</h1>
            <div className='text-7xl font-bold'>8</div>
          </div>

        </div>
        <div className=" w-full bg-red-300	 shadow-md  shadow-gray-400/50	 mt-6 text-gray-700 shadow-md bg-clip-border rounded-xl w-96 p-2">
          <div className='my-4 w-full text-center'>
            <h1>Total Awaiting Approval</h1>
            <div className='text-7xl font-bold'>2</div>
          </div>

        </div>
        <div className=" w-full bg-yellow-300	 shadow-md  shadow-gray-400/50	 mt-6 text-gray-700 shadow-md bg-clip-border rounded-xl w-96 p-2">
          <div className='my-4 w-full text-center'>
            <h1>Total in Progress</h1>
            <div className='text-7xl font-bold'>2</div>
          </div>

        </div>


      </div>
    </div>
  )
}

export default Dashboard