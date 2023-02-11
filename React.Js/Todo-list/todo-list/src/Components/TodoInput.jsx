import React from "react";
import style from "../Assets/Style/TodoInput.module.css";
import { useState } from "react";
import TodoHome from "./TodoHome";

function TodoInput(props) {
  const [title, setTitle] = useState(props?.preFilledData?.title);
  const [description, setDescription] = useState(
    props?.preFilledData?.description
  );
  const [border, setBorder] = useState(props?.preFilledData?.border||[]);
  const [showTodoHome, setShowTodoHome] = useState(false);

  function AddTodo() {
    const input = {
      title,
      description,
      border,
      iscompleted: false,
    };
    console.log(input);
    props.setShowTodoInput(false, input);
  }

  const Tags = [
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
          {showTodoHome && <TodoHome setShowTodoInput={setShowTodoHome} />}
          <div className="card-body">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="container">
                <div className="row">
                  <div className="col-sm-2 col-2 .col-md-2	.col-lg-2	.col-xl-2	.col-xxl-2">
                    <label
                      className={style["Cancel"]}
                      onClick={() => props.setShowTodoInput(false)}
                    >
                      Cancel
                    </label>
                  </div>
                  <div className="col-sm-7 col-7 col-md-7 col-lg-7 col-xl-7 col-xxl-7"></div>
                  <div className="col-sm-3 col-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                    <button
                      className={"btn btn-secondary ps-4 pe-4 " + style["Add"]}
                      type="btn"
                      onClick={AddTodo}
                    >
                      {" "}
                      Add{" "}
                    </button>
                  </div>
                </div>

                {/* Title point */}

                <label className="mt-4 pb-2">Title</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="add a title...."
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />

                {/* Description point */}

                <label className="form-label mt-4">Description</label>
                <br />
                <textarea
                  type="text"
                  class="form-control rounded-2"
                  placeholder="add a description..."
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />

                <label className="pb-1 my-3">Tags</label>
                <br />
                <div className="row">
                  {Tags.map((title, index) => (
                    <div
                      value={title.title}
                      className={
                        border.includes(title.id)
                          ? "col-md-3 d-flex border p-2"
                          : "col-md-3 d-flex p-2"
                      }
                      key={index}
                    >
                      <button
                        className={style["dot-" + title.id]}
                        onClick={() =>
                          setBorder((p) =>
                            p.includes(title.id)
                              ? p.filter((p) => p !== title.id)
                              : [...p, title.id]
                          )
                        }
                      />
                      <label className="ms-1">{title.title}</label>
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
