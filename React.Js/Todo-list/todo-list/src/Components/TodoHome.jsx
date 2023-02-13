import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { TodoContex } from "../App";
import style from "../Assets/Style/TodoHome.module.css";
import Tasks from "../Components/Tasks";
import TodoInput from "./TodoInput";

function TodoHome() {
  const appContext = useContext(TodoContex)
  const [showTodoHome, setShowTodoInput] = useState(false);
  const [todos, setTodos] = useState([]);
  const [editable, setEditable] = useState();

  const handleTodoInput=(value, input=[])=>{

    setShowTodoInput(value)
     if(input.length===0)
    return; 
    
    if(editable?.id>=0){
      setTodos(p=>{
        p[editable?.id]=input
        return p
      })
      setEditable(null); 
      return; 
    } 
    setTodos([...todos, input])  
  }

  const editableHandler = (input) => {
    setShowTodoInput(true);
    setEditable(input)
  }  

  return (
    <div>
      { appContext.editOpen && <TodoInput setShowTodoInput={handleTodoInput} preFilledData={editable}/> }
      <div className="container">
        <div className="row pt-5">
          <div className="col-sm-2">
            <h3>todo</h3>
          </div>
          <div className="col-sm-9"></div>
          <div className="col-sm-1">
            <h3 onClick={()=>appContext.dispatch({type:"EditOpen"})}>
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
            <Tasks input={todos} setEditable={editableHandler}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoHome;
