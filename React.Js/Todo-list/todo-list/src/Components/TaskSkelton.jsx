import style from "../Assets/Style/TaskSkelton.module.css";
import { useContext, useState } from "react";
import TaskMenu from "./TaskMenu";
import { TodoContex } from "../App";

export default function TaskSkelton() {
  const appContext = useContext(TodoContex);
  const [done, setDone] = useState();

  return (
    <div className="col-sm-6 col-sm-6 mb-3 mb-sm-0">
      <div className={"card my-3 bg-warninhg " + style["bg"]}>
        <div className="card-body">
          <div className="row">
            <div className="col-sm-10">
              { appContext?.allTodos?.map((item, i) => (
                <p className="text-danger" key={i}>
                  {item.title}
                  <br />
                  {item.description}
                </p>
              ))}
            </div>
            <div className="col-sm-2">
              <TaskMenu />
            </div>
          </div>

          {/*===========done point===============*/}
          <div className="row">
            <div className="col-sm-12 text-end">
              <input type="checkbox" onClick={() => setDone((pre) => !pre)} />
              {done ? (
                <label className="ms-1">
                  <b>Done</b>
                </label>
              ) : (
                <label className="ms-1">Done</label>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
