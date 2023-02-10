import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "../Assets/Style/TaskSkelton.module.css";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import EditDelete from "./EditDelete";
import TaskMenu from "./TaskMenu";

export default function TaskSkelton(props) {
    const [done, setDone] = useState(false) 
    const title = props.title;
    const description = props.description;
    const tags = props.tags;

  return (
    <div className="col-sm-6 col-sm-6 mb-3 mb-sm-0">
      <div className={"card my-3 bg-warninhg " +style["bg"]}>
        <div className="card-body">
          <div className="row">
            <div className="col-sm-5">
             { done ? <b className="card-title text-bold"><del>{title}</del></b> : <b className="card-title text-bold">{title}</b> }
              </div>
            <div className="col-sm-5"></div>
            <TaskMenu/>
          </div>
        {done ? <p className="card-text"><del>{description}</del></p>    : <p className="card-text">{description}</p> }
          <div className="row">
            {tags.map((title, index) => (
              <div
                value={title.title}
                className={"col-md-3 d-flex p-2"}
                key={index}
              >
                <button className={style["dot-" + title.id]} />
                <label className="ms-1">{title.title}</label>
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
