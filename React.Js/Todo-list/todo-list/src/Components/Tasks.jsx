import React from "react";
import style from "../Assets/Style/Tasks.module.css";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Tasks() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-sm-6 mb-3 mb-sm-0">
          <div className="card my-3 bg-warninhg">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-5">
                    <p className="card-title text-bold">
                     The first task title
                    </p>
                  </div>
                  <div className="col-sm-5"></div>
                  <div className="col-sm-2 text-end">
                    <FontAwesomeIcon icon={faPlus} />
                  </div>
                </div>
                <p className="card-text">
                  
                    {" "}
                    With supporting text below as a natural lead-in to
                    additional content.
                  
                </p>
                <div className="row">
                  <div className="col-md-4">
                  <button className={style["dot-1"]} />
                    <button className={"mx-1 " + style["dot-2"]} />
                    <button className={style["dot-3"]} />
                  </div>
                  <div className="col-sm-5"></div>
                  <div className="col-sm-3 text-end">
                    <input type="checkbox" />
                    <label className="px-2">Done</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="card my-3">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-5">
                    <p className="card-title text-bold">
                      <del>The first task title</del>
                    </p>
                  </div>
                  <div className="col-sm-5"></div>
                  <div className="col-sm-2 text-end">
                    <FontAwesomeIcon icon={faPlus} />
                  </div>
                </div>
                <p className="card-text">
                  <del>
                    {" "}
                    With supporting text below as a natural lead-in to
                    additional content.
                  </del>
                </p>
                <div className="row">
                  <div className="col-md-4">
                    <button className={"mx-1 " + style["dot-2"]} />
                    <button className={style["dot-3"]} />
                  </div>
                  <div className="col-sm-5"></div>
                  <div className="col-sm-3 text-end">
                    <input type="checkbox" />
                    <label className="px-2">Done</label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-6">This one is next here..!</div>
        </div>
      </div>
    </div>
  );
}

export default Tasks;
