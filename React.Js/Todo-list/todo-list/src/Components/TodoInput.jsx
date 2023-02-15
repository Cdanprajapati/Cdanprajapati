import React, { useContext } from "react";
import style from "../Assets/Style/TodoInput.module.css";
import { useState } from "react";
import { TodoContex } from "../App";

function TodoInput() {
  const appContext = useContext(TodoContex)
  const [border, setBorder] = useState([]);
  const {state, dispatch} = appContext;

  console.log( appContext )

  const Tags  = [
    { title: "work", id: 1 },
    { title: "study", id: 2 },
    { title: "enjoyment", id: 3 },
    { title: "family", id: 4 },
  ];

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
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="container">
                <div className="row">
                  <div className="col-sm-2 col-2 .col-md-2	.col-lg-2	.col-xl-2	.col-xxl-2">
                    <label
                      className={style["Cancel"]}
                      onClick={()=>appContext.dispatch({type:"EditClose"})}
                    >
                      Cancel
                    </label>
                  </div>
                  <div className="col-sm-7 col-7 col-md-7 col-lg-7 col-xl-7 col-xxl-7"></div>
                  <div className="col-sm-3 col-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                    <button
                      className={"btn btn-secondary ps-4 pe-4 " + style["Add"]}
                      type="btn"
                      onClick={()=>appContext.dispatch({type:"addTodo"})}
                    >
                      {" "}
                      Add{" "}
                    </button>
                  </div>
                </div>

                {/*=======================Title point========================= */}

                <label className="mt-4 pb-2">Title</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="add a title...."
                  value={state?.title}
                  onChange={(e)=> dispatch({ type: 'Title', data: e.target.value})}
                />

                {/*=======================Description point=======================*/}

                <label className="form-label mt-4">Description</label>
                <br />
                <textarea
                  type="text"
                  className="form-control rounded-2"
                  placeholder="add a description..."
                  rows={4}
                  value={state?.description}
                  onChange={(e)=> dispatch({ type: 'Description', data: e.target.value})}
                />

                <label className="pb-1 my-3">Tags</label>
                <br />
                <div className="row">
                  { Tags.map((item, i) => (
                    <div
                      value={item.title}
                      className={
                        border.includes(item.id)
                          ? "col-md-3 d-flex border p-2"
                          : "col-md-3 d-flex p-2"
                      }
                      key={i}
                    >
                      <button
                        className={style["dot-" + item.id]}
                        onClick={() => setBorder((p) => p.includes(item.id) ? p.filter((p) => p !== item.id) : [...p, item.id]
                          )
                        }
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
