import React from "react";
import style from "../Assets/Style/EditDelete.module.css";
import {useState} from 'react';

function EditDelete(props) {
  const [todoInput, setTodoInput] = useState(false)
  



  return (
    <div>
      <div className={"container "+style["card"]}>
        <div className="row " >
          <div className="col-sm-12">
            <div className={"border border-1 rounded-top "+style["Edit"]} onClick={props.editHandler}>
              <p className="card-title ms-2 pt-1 text-start text-dark" onClick={()=>setTodoInput(preState=>!preState)}>Edit..</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <div className={"border border-1 rounded-bottom "+style["Delete"]} onClick={props.deleteHandler}>
              <p className="card-title ms-2 pt-1 text-start text-dark">Delete</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditDelete;
