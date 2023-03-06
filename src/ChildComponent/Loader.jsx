import React from "react";
import style from "../Assets/Style/Loader.module.css";
// import loader from "../Assets/Img/Loader3.gif";

function Loader() {
  return (
    <div className={style["section"]}>
      <div className="row">
        <div className="col-sm-12">
          <div className={"container "+style["body"]}>
            <div className="spinner-grow text-primary d-flex ms-2" role="status">
            </div>
            <div className="spinner-grow text-info d-flex ms-2" role="status">
            </div>
            <div className="spinner-grow text-success d-flex ms-2" role="status">
            </div>
            <div className="spinner-grow text-danger d-flex ms-2" role="status">
            </div>
            <div className="spinner-grow text-warning d-flex ms-2" role="status">
            </div>
            {/* <div className="spinner-grow text-info d-flex ms-2" role="status">
            </div>
            <div className="spinner-grow text-light d-flex ms-2" role="status">
            </div> */}
            {/* <div className="spinner-grow text-dark d-flex ms-2" role="status">              
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loader;
