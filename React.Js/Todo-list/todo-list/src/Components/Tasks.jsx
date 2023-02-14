import { useContext } from "react";
import { TodoContex } from "../App";
import TaskSkelton from "./TaskSkelton";

function Tasks() {
  const appContext = useContext(TodoContex);
  // const setEditable = (id) => {
  //   console.log(id, "====>")
  //   console.log(data[id], '====>')
  //   setEditable({...input[id], id})  
  // const input = [];
  console.log(appContext.allTodos)

  return (
    <div>
      <div className="container">
        <div className="row">   
               
          {
            appContext.allTodos.map((item, i)=> <TaskSkelton id={i} title={item.title} description={item.description} tags={item.border}/>)          
          }            
               
        </div>
      </div>
    </div>
  );
}

export default Tasks;
