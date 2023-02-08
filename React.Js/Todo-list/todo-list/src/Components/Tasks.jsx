import React from "react";
import style from "../Assets/Style/Tasks.module.css";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Tasks() {
  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <div className="col-sm-6 col-sm-6 mb-3 mb-sm-0">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-5">
                    <h5 className="card-title">The first task title</h5>
                  </div>
                  <div className="col-sm-5"></div>
                  <div className="col-sm-2 text-end">
                    <FontAwesomeIcon icon={faHome} />
                  </div>
                </div>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                  itaque perferendis eos voluptas a quidem optio, qui commodi
                  eius in?
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
                    <h5 className="card-title">
                      <del>The first task title</del>
                    </h5>
                  </div>
                  <div className="col-sm-5"></div>
                  <div className="col-sm-2 text-end">
                    <FontAwesomeIcon icon={faHome} />
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
