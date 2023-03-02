import React, { useContext } from "react";
import { RxCross1 } from "react-icons/rx";
import { TodoContex } from "../App";
import style from '../Assets/Style/ForgetPassword.module.css';

function ForgetPassword() {
  const appContext = useContext(TodoContex);
  return (
   
            <div className={"card shadow-lg p-3  rounded " + style["Body"]}>
              <form>
                <div className="row">
                  <div className="col-sm-7 mb-2">
                    <b className="text-bold">Forget Password</b>
                  </div>
                  <div className="col-sm-3"></div>
                  <div className={"col-sm-2 "+style["Cross"]}>
                    <b onClick={()=>appContext.dispatch({type:"Loginclose"})}>
                      <RxCross1 />
                    </b>
                  </div>
                </div>              

                <label className={"pt-1 " + style["text-size"]}>Email</label>
                <input
                  type="email"
                  className={"form-control " + style["placeholder"]}
                />      
               
                <button
                  className={
                    "btn py-1 container-fluid mt-2 " + style["btn"]
                  }
                  type="button"
                >
                  Send Password
                </button>
                <hr />
                <p className={"text-center " + style["bottom-p"]}>
                  Already have an account ?
                </p>
                <a className={"text-center " + style["anchor-tag"]} 
                  onClick={()=>appContext.dispatch({type: "ForgetPassClose"})}
                href="#">
                  SignUp
                </a>
              </form>
              {/* </div> */}
            </div>
        
  );
}

export default ForgetPassword;
