import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import style from "../Assets/Style/TodoHome.module.css";
import Tasks from "../Components/Tasks";
import TodoInput from "./TodoInput";


function TodoHome() {
  const [showTodoInput, setShowTodoInput] = useState(false);
  const [todos, setTodos] = useState([]);

  const handleTodoInput=(value, data=[])=>{
    setShowTodoInput(value)
    if(data.length===0)
    return; 
    setTodos([...todos, data])
  }
 
  return (
    <div>
      { showTodoInput && <TodoInput setShowTodoInput={handleTodoInput}/> }
      <div className="container">
        <div className="row pt-5">
          <div className="col-sm-2">
            <h3>todo</h3>
          </div>
          <div className="col-sm-9"></div>
          <div className="col-sm-1">
            <h3 onClick={()=>setShowTodoInput(true)}>
              <FontAwesomeIcon icon={faPlus} />
            </h3>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-sm-3 ">
            <button className={"mt-4 " + style["dot"]} />
            <label className="ms-1 my-auto">Work</label>
            <br />

            <button className={"mt-4 " + style["dot-1"]} />
            <label className="ms-1 my-auto">Study</label>
            <br />

            <button className={"mt-4 " + style["dot-2"]} />
            <label className="ms-1 my-auto">Entertainment</label>
            <br />

            <button className={"mt-4 " + style["dot-3"]} />
            <label className="ms-1 my-auto">Family</label>
            <br />

            <input className="mt-5" type="checkbox" />
            <label className="ps-2">Hide Done Task</label>
          </div>
          <div className="col-sm-9">
            <Tasks data={todos} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoHome;
