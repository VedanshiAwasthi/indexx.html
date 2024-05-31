import React from 'react'

const Task = ({title,description,del, index}) => {
  return (<div className="task">

        <div>
            <p>{title}</p>
            <span>{description}</span>
        </div>

        <button onClick={()=>{del(index);}}>-</button>
  </div>);
};

export default Task;
