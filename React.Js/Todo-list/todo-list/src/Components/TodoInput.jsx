import React from "react";
import style from "../Assets/Style/TodoInput.module.css";


function TodoInput() {
  return (
    <div>
      <div className="container">
        <div
          className={
            "card mx-auto rounded-4 shadow-lg p-3 mb-5 bg-body-tertiary " +
            style["card-container"]
          }>
        
          <div className="card-body">
            <form>
              <div className="container">
                <div className="row">
                  <div className="col-sm-2 col-2 .col-md-2	.col-lg-2	.col-xl-2	.col-xxl-2">
                    <label>Cancel</label>
                  </div>
                  <div className="col-sm-7 col-7 col-md-7 col-lg-7 col-xl-7 col-xxl-7"></div>
                  <div className="col-sm-3 col-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                    <button className="btn btn-secondary ps-4 pe-4" type="btn">
                      {" "}
                      Add{" "}
                    </button>
                  </div>
                </div>
            
              {/* Title point */}
             
                <label className="mt-4 pb-2">Title</label>
                <input
                  type="email"
                  class="form-control"
                  placeholder="add a title...."
                />

                {/* Description point */}

                <label className="form-label mt-4">Description</label>
                <br />
                <textarea
                  type="text"
                  class="form-control rounded-2"
                  placeholder="add a description..."
                  rows={4}
                />

                <label className="pb-1 my-3">Tags</label>
                <br />
                <div className="row">
                  <div className="col-md-2 d-flex">
                    <button type="btn" className={style["dot"]} />
                    <label className="ms-1">Work</label>
                  </div>
                  <div className="col-md-3 d-flex">
                    <button className={style["dot-1"]} />
                    <label className="ms-1">Study</label>
                  </div>
                  <div className="col-md-4 d-flex">
                    <button className={style["dot-2"]} />
                    <label className="ms-1">Entertainment</label>
                  </div>
                  <div className="col-md-3 d-flex">
                    <button className={style["dot-3"]} />
                    <label className="ms-1">Family</label>
                  </div>
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
