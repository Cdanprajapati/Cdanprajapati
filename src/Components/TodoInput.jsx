import React, { useContext, useState } from "react";
import style from "../Assets/Style/TodoInput.module.css";
import { TodoContex } from "../App";
import useFetchAPI from "../hook/useFetchAPI";

function TodoInput({ id }) {
  const appContext = useContext(TodoContex);
  const loginAPI = useFetchAPI();
  const [inputErr, setInputErr] = useState(false);
  const [post, getPost] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const API = "http://localhost:8000/user/addTodo";

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  function loginHandle(e) {
    e.preventDefault()
    // if (!appContext.tittle && !appContext.description) {
    //   setInputErr(true)
    // }else{

    if(title.length && description.length < 3){
      setInputErr(true)
    }else{

      let data = { title, description };
      loginAPI("user/addTodo", "POST", data, getPost);

      setInputErr(false)
      appContext.dispatch({ type: "addTodo", id });
    }
  }
  console.log( appContext.border)
  return (
    <div className={"position-absolute " + style["input-container"]}>
      <div className="container">
        <div
          className={
            "card mx-auto rounded-4 shadow-lg p-3 mb-5 bg-body-tertiary " +
            style["card-container"]
          }
        >
          <div className="card-body">
            <form onSubmit={(e)=>e.preventDefault()}>
              <div className="container">
                <div className="row">
                  <div className="col-sm-2 col-2 .col-md-2	.col-lg-2	.col-xl-2	.col-xxl-2">
                    <label
                      className={style["Cancel"]}
                      onClick={() =>
                        appContext.dispatch({ type: "InputClose" })
                      }
                    >
                      Cancel
                    </label>
                  </div>
                  <div className="col-sm-7 col-7 col-md-7 col-lg-7 col-xl-7 col-xxl-7"></div>
                  <div className="col-sm-3 col-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                    {appContext.taskMenu ? (
                      <button
                        className={
                          "btn btn-secondary ps-4 pe-4 " + style["Add"]
                        }
                        type="btn"
                        onClick={() =>
                          appContext.dispatch({ type: "UpdatedTask", id })
                        }
                      >
                        Update
                      </button>
                    ) : (
                      <button
                        className={
                          "btn btn-secondary ps-4 pe-4 " + style["Add"]
                        }
                        type="btn"
                        onClick={loginHandle}
                      >
                        Add
                      </button>
                    )}
                  </div>
                </div>
                {/*=======================Title point=========================*/}
                <label className="mt-4 pb-2">Title</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="add a title...."
                  // value={appContext?.title}
                  value={title}
                  onChange={(e) =>
                    // appContext.dispatch({ type: "Title", data: e.target.value })
                    setTitle(e.target.value)
                  }/>
                {
                   inputErr ? <div className="alert alert-danger" role="alert">
                   <strong>Please..!</strong> Make sure you have filled all fields
                 </div> : "" 
                   } 
                {/*=======================Description point=======================*/}
                <label className="form-label mt-4">Description</label>
                <br />
                <textarea
                  type="text"
                  className="form-control rounded-2"
                  placeholder="add a description..."
                  rows={4}
                  // value={appContext?.description}
                  value={description}
                  onChange={(e) =>
                    // appContext.dispatch({
                    //   type: "Description",
                    //   data: e.target.value,
                    // })
                    setDescription(e.target.value)
                  }
                />
                <label className="pb-1 mt-3">Tags</label>
                <br />
                <div className="row">
                  { appContext.tags.map((item, i) => (
                    <div
                      value={item.title}
                      className={
                        appContext.border.filter((border, id) => border.id === item.id).length>0
                        ? "col-md-3 d-flex border p-2 rounded "+style["Touch"] : "col-md-3 d-flex p-2"
                        }                      
                      key={i}
                    >
                      <button
                        className={style["dot-" + item.id]}
                        onClick={() => appContext.dispatch({ type:"SelectedTags", id:item.id})}     
                       />
                      <label className="ms-1">{item.title}</label>                    
                    </div>
                  ))}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TodoInput;