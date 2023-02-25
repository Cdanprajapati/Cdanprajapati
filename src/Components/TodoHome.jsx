import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { TodoContex } from "../App";
import style from "../Assets/Style/TodoHome.module.css";
import Tasks from "../Components/Tasks";
import TodoInput from "./TodoInput";

function TodoHome({ id }) {
  const appContext = useContext(TodoContex);

  return (
    <div>
      {console.log(id)}
      {appContext.inputOpen && <TodoInput id={id} />}

      <div className="container">
        <div className="row pt-5">
          <div className="col-sm-2">
            <h3>todo</h3>
          </div>
          <div className="col-sm-9"></div>
          <div className="col-sm-1">
            <h3 onClick={() => appContext.dispatch({ type: "InputOpen" })}>
              <FontAwesomeIcon icon={faPlus} />
            </h3>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-sm-3 ">
            <button className={"mt-4 " + style["dot-1"]} />
            <label className="ms-1 my-auto">Work</label>
            <br />

            <button className={"mt-4 " + style["dot-2"]} />
            <label className="ms-1 my-auto">Study</label>
            <br />

            <button className={"mt-4 " + style["dot-3"]} />
            <label className="ms-1 my-auto">Entertainment</label>
            <br />

            <button className={"mt-4 " + style["dot-4"]} />
            <label className="ms-1 my-auto">Family</label>
            <br />

            <input
              className="mt-5"
              type="checkbox"
              onClick={() => appContext.dispatch({type: "HideDonetask"})}
            />           
              <label className="ps-2">Hide Done Task</label>          
            </div>
          <div className="col-sm-9">           
            <Tasks id={id} />  
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoHome;
