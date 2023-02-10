import React from "react";
import TaskSkelton from "./TaskSkelton";

function Tasks(props) {
  return (
    <div>
      <div className="container">
        <div className="row">
          
          {
            props.data.map(item=> <TaskSkelton title={item.title} description={item.description} tags={item.border}/>)
          }
          
        </div>
      </div>
    </div>
  );
}

export default Tasks;
