import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { TodoContex } from "../App";
import style from "../Assets/Style/TodoHome.module.css";
import Tasks from "../Components/Tasks";
import HomeChild from "../ChildComponent/HomeChild";
import HomeTag from '../ChildComponent/HomeTag';

function TodoHome({ id }) {
  const appContext = useContext(TodoContex);
  console.log(appContext, "===>")
  return (
    <div>
      <HomeChild />
      <div className="container">
        <div className="row pt-5">
          <div className="col-sm-2 col-4 col-md-4">
            <h3>todo</h3>
          </div>
          <div className="col-sm-9 col-6 col-md-6"></div>
          <div className="col-sm-1 col-2 col-md-2">
            <h3 onClick={() => appContext.dispatch({ type: "InputOpen" })}>
              <FontAwesomeIcon icon={faPlus} />
            </h3>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-sm-3">
           <HomeTag />
          </div>

          <div className="col-sm-9">
            <Tasks id={id} />
          </div>

          <div className="row">
            <div className="col-sm-3">
              <input
                className="mt-5"
                type="checkbox"
                onClick={(e) =>
                  appContext.dispatch({
                    type: "HideDonetask",
                    checked: e.target.checked,
                  })
                }
              />
              <label className="ps-2">Hide Done Task</label>
              <br/>
              < button className={"btn "+style["loginBtn"]}
                onClick={()=>appContext.dispatch({type: "LoginOpen"})}>login</button>
            </div>
            <div className="col-sm-9"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TodoHome;