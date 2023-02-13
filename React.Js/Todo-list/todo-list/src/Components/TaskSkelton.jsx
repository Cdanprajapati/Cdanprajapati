import style from "../Assets/Style/TaskSkelton.module.css";
import { useContext, useState } from "react";
import TaskMenu from "./TaskMenu";
import { TodoContex } from "../App";

export default function TaskSkelton() {
    const appContext = useContext(TodoContex);
    const [done, setDone] = useState(false) 
    const title = '';
    const description = '';
    const tags = '';

  return (
    <div className="col-sm-6 col-sm-6 mb-3 mb-sm-0">
      <div className={"card my-3 bg-warninhg " +style["bg"]}>
        <div className="card-body">
          <div className="row">
            <div className="col-sm-5">
             { done ? <b className="card-title text-bold"><del>{appContext.title}</del></b> : <b className="card-title text-bold">{appContext.title}</b> }
              </div>
            <div className="col-sm-5"></div>
            <TaskMenu id={appContext.id} setEditable={appContext.setEditable}/>
          </div>
        { done ? <p className="card-text"><del>{appContext.description}</del></p> : <p className="card-text">{appContext.description}</p> }
          <div className="row">
            {appContext.allTodos.map((title, index) => (
              <div
                value={appContext.title}
                className={"col-md-3 d-flex p-2"}
                key={index}
              >
                <button className={style["dot-" + appContext.id]} />
                <label className="ms-1">{appContext.title}</label>
              </div>                             
            ))}                    
          </div>
            <div className="row">
              <div className="col-sm-12 text-end">
                <input type="checkbox" onClick={()=>setDone(pre=>!pre)}/>{ done ? <label className="ms-1"><b>Done</b></label> : <label className="ms-1">Done</label> }
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}
