import React, { useContext } from "react";
import { RxCross1 } from "react-icons/rx";
import { TodoContex } from "../App";
import {AiFillEye} from 'react-icons/ai';
import {AiFillEyeInvisible} from "react-icons/ai";
import style from "../Assets/Style/SignUp.module.css";
import Login from "./Login";

function SignUp() {
  const appContext = useContext(TodoContex);
  return (
    <div className={style["backgroundColor"]}>
      <div className="container">
        <div className="row">
          <div className="row">
            <div className="col-sm-11"></div>
            <div className="col-sm-1">
              <h3 className="py-3"><RxCross1 onClick={()=>appContext.dispatch({type: "SignUpclose"})}/></h3>
            </div>
          </div>
          <div className="col-sm-6 py-3  d-flex">
            <div className={"card shadow-lg p-3  rounded " + style["Body"]}>
              <form>
                <div className="row">
                  <div className="col-sm-6">
                    <h5 className="text-bold">Sign Up</h5>
                  </div>
                  <div className="col-sm-4"></div>
                  <div className="col-sm-2">
                    <b>
                      <RxCross1 />
                    </b>
                  </div>
                </div>
                <label className={style["text-size"]}>First Name</label>
                <input
                  type="text"
                  className={"form-control " + style["placeholder"]}
                  placeholder="Enter your first name"
                />

                <label className={"pt-1 " + style["text-size"]}>
                  Last Name
                </label>
                <input
                  type="text"
                  className={"form-control " + style["placeholder"]}
                  placeholder="Enter your last name"
                />

                <label className={"pt-1 " + style["text-size"]}>Email</label>
                <input
                  type="email"
                  className={"form-control " + style["placeholder"]}
                  placeholder="Enter your email name"
                />

                <label className={"pt-1 " + style["text-size"]}>Password</label>
                <input
                  type={ appContext.visible ? "text" : "password"}
                  className={"form-control " + style["placeholder"]}
                  placeholder="Enter your password"
                />
                <div className={style["EyeIcons"]} onClick={()=>appContext.dispatch({type: "VisiblePassword"})} >
                  {  
                    appContext.visible ? <AiFillEye /> : <AiFillEyeInvisible />
                  }
                </div>

                <label className={"pt-1 " + style["text-size"]}>
                  {" "}
                  Confirm Password
                </label>
                <input
                  type="password"
                  className={"form-control " + style["placeholder"]}
                  placeholder="Enter your Confirm password"
                />
                <hr />
                <input
                  type="checkbox"
                  className={"pt-1" + style["text-size"]}
                />
                <label className={"pt-1 ms-2 " + style["text-size"]}>
                  I agree with <a href="#">Terms</a> and <a href="#">Privacy</a>
                </label>
                <button
                  className={
                    "btn py-1 btn-primary container-fluid mt-2 " + style["btn"]
                  }
                  type="button"
                >
                  Sign Up
                </button>
                <hr />
                <p className={"text-center " + style["bottom-p"]}>
                  Already have an account ?
                </p>
                <a className={"text-center " + style["anchor-tag"]} href="#">
                  Log in
                </a>
              </form>
              {/* </div> */}
            </div>
          </div>
          <div className="col-sm-6 py-3">
            <Login />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
