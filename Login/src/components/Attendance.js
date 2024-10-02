import React, { useState } from 'react'
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

const Attendance = () => {
  const[stud,setStud]=useState([]);
  const[add,setAdd]=useState("");
  const[presentcount,setPresentcount]=useState(0);
  const[absentcount,setAbsentcount]=useState(0);

  function handlePresent(id){
    const index=stud.findIndex(s=>s.id===id);
    if(stud[index].present===false||stud[index].present===null){
      stud[index].present=true;
      setPresentcount(presentcount+1);
      setAbsentcount(absentcount-1);
    }
    console.log(stud[index]);
    console.log(presentcount);
  }

  function handleAbsent(id){
    const index=stud.findIndex(s=>s.id===id);
    if(stud[index].present===true||stud[index].present===null){
      stud[index].present=false;
      setPresentcount(presentcount-1);
      setAbsentcount(absentcount+1);
    }
    console.log(stud[index]);
    console.log(presentcount);
  }
  
  function handleSubmit(e)
  {
    e.preventDefault();
    const newId=stud.length+1;
    if(add.trim()){
      setStud([...stud,{id:newId,name:add,present:null}]);
      setAbsentcount(absentcount+1);
      setAdd("");
    } 
  }
  return (
    <div>
        <div className='flex justify-center items-center mr-96 text-xl gap-2 mt-8'>
          <h1>Add students :</h1>
          <form onSubmit={handleSubmit}>
            <input 
              placeholder='Add students'
              type='text'
              value={add}
              onChange={(e)=>setAdd(e.target.value)}
              className='bg-gray-400 w-[80%]'
            />
            <button 
              className='bg-green-300'>
              ADD
            </button>
          </form>
        </div>
        <div className='flex justify-start mx-96 bg-white text-xl p-14'>
          <h1>NO.OF STUD PRESENT: </h1>
          <span>{presentcount}</span>    
        </div>
        <div className='flex justify-start mx-96 bg-white w-[50%] h-60 m-1 text-xl p-14 overflow-auto'>
          <ol className='list-decimal space-y-4'>
            {stud.length > 0 ? (
              stud.map((data) => (
                <li key={data.id} className='flex justify-between gap-20'>
                  <span className='text-2xl'>{data.id}. {data.name}  {data.present}</span>
                  <div className='flex gap-8'>
                    <button className={`${data.present ? 'bg-green-300 px-2 py-1' :"bg-gray-400 px-2 py-1" }`} onClick={()=>handlePresent(data.id)}>Present</button>
                    <button className={`${!data.present&&data.present!==null ? 'bg-red-300 px-2 py-1' : "bg-gray-400 px-2 py-1" }`} onClick={()=>handleAbsent(data.id)}>Absent</button>
                  </div>
                </li>
              ))
            ) : (
              <h1>No students</h1>
            )}
          </ol>
        </div>
        <div className='lex justify-start mx-96 w-[40%] h-56 m-1 p-14'>
          <PieChart presentcount={presentcount} absentcount={absentcount}/>
        </div>
      </div>
  )
}


ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({presentcount,absentcount}) => {
  const data = {
    labels: ["Present","Absent"],
    datasets: [
      {
        label: "Present Absent chart",
        data: [presentcount,absentcount],
        backgroundColor: [
          "rgba(144, 238, 144, 0.6)",
          "rgba(255, 99, 132, 0.6)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return(
       <Pie data={data} />
    );
};

export default Attendance 