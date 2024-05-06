"use client"
import React, { useState } from "react";

const page = () => {
  const [title, settitle] = useState("")
  const [description, setdescription] = useState("")
  const [mainTask, setmaintask] = useState([])
  const deleteHandler=(i)=>{
    let copytask =[...mainTask]
    copytask.splice(i,1)
    setmaintask(copytask)

  }

  const submitHandler =(e)=>{
    e.preventDefault();
     setmaintask([...mainTask, {title , description}]);
    settitle("");
    setdescription("");
    console.log(mainTask);

  }

  let renderTask =<h2>No task avilable</h2>
if(mainTask.length>0){


  renderTask = mainTask.map((t,i)=>{
    return(
      <li key={i} className="flex justify-between items-center">
        <div className="flex justify-between  items-center w-2/3" >
        <h2 className="text-2xl mb-2 font-bold">{t.title}</h2>
        <h3>{t.description}</h3>
      </div>
      <button onClick={()=>{
        deleteHandler(i)
      }}  className="bg-red-400 text-white px-4 py-2 mb-4">delete</button>
      </li>
      
    )
  })
}
  return (
    <>
      <h1 className="bg-black text-white text-3xl  text-center h-14 pt-2 font-bold">
        suman's todo list
      </h1>
      <form onSubmit={submitHandler}> 
        <input
          type="text"
          className=" font-black border-black border-4 m-10 px-4 py-4"
          placeholder="enter title"
          value={title}
          onChange={(e)=>{
            settitle(e.target.value)

          }}
        />
        <input
          type="text"
          className=" font-black border-black border-4 m-10 px-4 py-4"
          placeholder="Description"
          value={description}
          onChange={(e)=>{
            setdescription(e.target.value)
          }}
        />
        <button className="bg-black text-white font-bold px-4 py-2 text-2xl  rounded m-6
       ">
         add task</button>

      </form>
      <hr />
      <div className="p-8 bg-slate-300">
      <ul>{renderTask}</ul>
      </div>
     
    </>
  );
};

export default page;
