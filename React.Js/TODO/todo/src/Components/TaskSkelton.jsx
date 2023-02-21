// import { type } from "@testing-library/user-event/dist/type";
import style from "../Assets/Style/TaskSkelton.module.css";
import TaskMenu from "./TaskMenu";
import { useContext } from "react";
import { TodoContex } from "../App";

export default function TaskSkelton({ title, description, tags, id , isDone, isCompleted}) {
  const appContext = useContext(TodoContex);

  console.log(appContext.allTodos)

  return (
    <div className="col-sm-6 col-sm-6 mb-3 mb-sm-0">
     <div className={"card my-3 bg-warninhg " + style["bg"]}>
        <div className="card-body">
          <div className="row">
            <div className="col-sm-10">
              <p className="text-start">                
              { isDone ?  
               <label className="ms-1"><b><del>{title}</del></b><br/><del>{description}</del></label>
               : <label className="ms-1"><b>{title}</b><br/>{description}</label> }
               { isCompleted && <label className="text-danger">{title}</label> }
              </p>
            </div>
            <div className="col-sm-2">
              <TaskMenu id={id}/>
            </div>
          </div>

          {/*===========done point  ==============*/}

         {!isDone && <div className="row">
            <div className="col-sm-12 text-end">              
              <input type="checkbox" onClick={()=>appContext.dispatch({type: "TaskDone",  id})}/>
              <label className="ms-1">Done</label>
            </div>
          </div>}
        </div>
      </div> 
    </div>
  );
}
