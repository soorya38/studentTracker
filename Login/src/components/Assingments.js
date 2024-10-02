import React, { useState } from 'react'

const Assingments = () => {
    const [work,setWork]=useState([]);
    const[assg,setAssg]=useState("");
    function handleSubmit(e)
    {
        e.preventDefault();
        if(assg.trim()){
            setWork([...work,assg]);
            setAssg("");
        }
    }
  return (
    <div>
        <h1 className='text-xl text-center'>Assingments</h1>
        <div className='text-center my-5'>
            <form onSubmit={handleSubmit}>
                <input 
                    placeholder='Add new assigments'
                    className='bg-black text-white w-80 h-8'
                    value={assg}
                    onChange={(e)=>setAssg(e.target.value)}
                    type='text' 
                    />
                <button 
                    className='bg-green-200 ml-2 h-8 w-10 text-lg'>
                    ADD
                </button>
            </form>
        </div>
        <div className='flex justify-start items-center flex-col my-5 mx-96 bg-gray-300 w-[50%] h-96'>
            {
                work.length>0 ? (
                    <ul className='text-xl'>
                        {
                            work.map((data,id)=>( 
                                <li key={id}>{data}</li>
                            ))
                        } 
                    </ul>
                ):<h1 className='text-xl'>No assignments</h1>
            }
        </div>
    </div>
  )
}

export default Assingments