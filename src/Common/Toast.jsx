import React from "react";
import style from '../Assets/Style/Toast.module.css';
import { useContext } from "react";
import { TodoContex } from "../App";
import { RxCross1 } from "react-icons/rx";

function Toast() {
  const appContext = useContext(TodoContex);
  return (
    <div>
       <div className={"card shadow-lg p-3 mt-3  rounded " + style["Body"]}>
              <form>
                <div className="row d-flex">
                  <div className="col-sm-6 d-flex">                 
                    <h5 className="text-bold">Congratulations</h5>
                  </div>
                  <div className="col-sm-4 d-flex"></div>
                  <div className={"col-sm-2 d-flex"+style["Cross"]}>
                    <b onClick={()=>appContext.dispatch({type:"ToastClose"})}>
                      <RxCross1 />
                    </b>
                  </div>
                </div>       
                <h1 className={style["password"]} onClick={()=>appContext.dispatch({type: "ForgetPasswordOpen"})} href="#">
                You have Sign Up successfully...!
              </h1>
              </form>
              {/* </div> */}
            </div>
      </div>    
  );
}

export default Toast;
