

import React, {useState,useEffect} from 'react';
import Task from './task';

const Home = () => {
  //JSON.parse -> to convert object into arr
  const [tasks,setTasks] = useState(localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : []);
  const [title,setTitle]= useState("");
  const [description, setDescp]=useState("");
  console.log(...tasks);

  const submitHandler=(e)=>{
    e.preventDefault();   //form ka default behavior h page reload krne ka ,vo nhi hoga
  
     setTasks([...tasks,{title:title , description:description}]); 
     setTitle("");
     setDescp("");
    };
    
    useEffect(() => {
    //to convert arr into string -> json.stringify
    localStorage.setItem("tasks" , JSON.stringify(tasks));
  }, [tasks]);
   
  const del=(index)=>{
    const filteredArr = tasks.filter((val, i)=>{return  i!== index});
    setTasks(filteredArr);
  };

  console.log(title);
  console.log(description);
  
  return (
    <div className="container">
      <h1>Daily Goals</h1>
      <form onSubmit={submitHandler}>
        <input type="text" placeholder='Title' value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
        <textarea placeholder='Description' value={description} onChange={(e)=>{setDescp(e.target.value)}}></textarea>
        <button type="submit">Add</button>
      </form>

      {tasks.map((item,index)=>(
        <Task key={index} title={item.title} description={item.description} del={del} index={index}/>
      ))}

    </div>
  );
};

export default Home;
