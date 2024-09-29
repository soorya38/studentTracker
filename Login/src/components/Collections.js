import React from 'react'

const Collections = () => {
  return (
    <div className='flex flex-wrap justify-between items-center bg-gray-300 p-4'>

      <div className='bg-gray-100 w-[45%] p-4 text-center m-2'>
        <button 
          onClick={()=>alert('meet')}>
          MEET
        </button>
      </div>

      <div className='bg-gray-100 w-[45%] p-4 text-center m-2'>
        <button 
          onClick={()=>alert('meet')}>
          Notifications
          </button>
      </div>

      <div className='bg-gray-100 w-[45%] p-4 text-center m-2'>
        <button 
          onClick={()=>alert('meet')}>
          Rewards
        </button>
      </div>
      
      <div className='bg-gray-100 w-[45%] p-4 text-center m-2'> 
        <button 
          onClick={()=>alert('meet')}>
          Rewards
        </button>
      </div>

      <div className='bg-gray-100 w-[45%] p-4 text-center m-2'>
        <button
          onClick={()=>alert('meet')}>
          To-Do
        </button>
      </div>

      <div className='bg-gray-100 w-[45%] p-4 text-center m-2'>
        <button  
          onClick={()=>alert('meet')}>
          Post assignments
        </button>
      </div>
      
      <div className='bg-gray-100 w-[45%] p-4 text-center m-2'>
        <button 
          onClick={()=>alert('meet')}>
          Details
        </button>
      </div>

      <div className='bg-gray-100 w-[45%] p-4 text-center m-2'>
        <button 
          onClick={()=>alert('meet')}>
          Explore
        </button>
      </div>
  </div>  
  
  )
}

export default Collections