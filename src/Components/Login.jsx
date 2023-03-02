import React, { useContext } from "react";
import { RxCross1 } from "react-icons/rx";
import { TodoContex } from "../App";
import {AiFillEye} from 'react-icons/ai';
import {AiFillEyeInvisible} from "react-icons/ai";
import SignUp from '../Components/SignUp';
import style from "../Assets/Style/Login.module.css";

function Login() {
  const appContext = useContext(TodoContex);
  return (
   
            <div className={"card shadow-lg p-3  rounded " + style["Body"]}>
              <form>
                <div className="row">
                  <div className="col-sm-6">
                    <h5 className="text-bold">Log in</h5>
                  </div>
                  <div className="col-sm-4"></div>
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

                <label className={"pt-1 " + style["text-size"]}>Password</label>
                <input
                  type={ appContext.visible ? "text" : "password"}
                  className={"form-control " + style["placeholder"]}
                />
                <div className={style["EyeIcons"]} onClick={()=>appContext.dispatch({type: "VisiblePassword"})} >
                  {  
                    appContext.visible ? <AiFillEye /> : <AiFillEyeInvisible />
                  }
                </div>             
               
                <button
                  className={
                    "btn py-1 container-fluid mt-2 " + style["btn"]
                  }
                  type="button"
                >
                  Login
                </button>
                <a className={style["password"]} onClick={()=>appContext.dispatch({type: "ForgetPasswordOpen"})} href="#">
            Forgot Password ?
          </a>
                <hr />
                <p className={"text-center " + style["bottom-p"]}>
                  Already have an account ?
                </p>
                <a className={"text-center " + style["anchor-tag"]} 
                  onClick={()=>appContext.dispatch({type: "SignUpOpen"})}
                href="#">
                  SignUp
                </a>
              </form>
              {/* </div> */}
            </div>
        
  );
}

export default Login;
