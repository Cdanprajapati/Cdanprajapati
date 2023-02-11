import React, { useState } from "react";
import TaskSkelton from "./TaskSkelton";

function Tasks(props) {

  const setEditable = (id)=>{
    console.log(id, "====>")
    console.log(props.data[id], '====>')
    props.setEditable({...props.data[id], id})
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          
          {
            props.data.map((item, i)=> <TaskSkelton id={i} setEditable={setEditable}  title={item.title} description={item.description} tags={item.border}/>)
          }
          
        </div>
      </div>
    </div>
  );
}

export default Tasks;
