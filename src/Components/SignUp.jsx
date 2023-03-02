import React, {useContext, useState } from "react";
import {TodoContex} from '../App';
import { RxCross1 } from "react-icons/rx";
import style from "../Assets/Style/SignUp.module.css";

function SignUp() {
  const appContext = useContext(TodoContex)
  const [fname, setFname] = useState([]);
  const [lname, setLname] = useState([]);
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);
  const [confirmPassword, setConfirmPassword] = useState([]);

  function HandleSubmit(){
    console.log( fname,
    lname,
    email,
    password,
    confirmPassword, "here all data")
  }


  return (
    <div>
      <div className={"card shadow-lg p-3  p-3 rounded " + style["Body"]}>
        {/* <div className="card-body"> */}
        <form>
          <div className="row">
            <div className="col-sm-6">
              <h5 className="text-bold">Sign Up</h5>
            </div>
            <div className="col-sm-4"></div>
            <div className="col-sm-2">
              <b className={style["Xcross"]} onClick={()=>appContext.dispatch({type: "Loginclose"})}>
                <RxCross1 />
              </b>
            </div>
          </div>
          <label className={style["text-size"]}>First Name</label>
          <input
            type="text"
            className={"form-control " + style["placeholder"]}
            onChange={(e)=>setFname(e.target.value)}
            value={fname}
          />

          <label className={"pt-1 " + style["text-size"]}>Last Name</label>
          <input
            type="text"
            className={"form-control " + style["placeholder"]}
            onChange={(e)=>setLname(e.target.value)}
            value={lname}
          />

          <label className={"pt-1 " + style["text-size"]}>Email</label>
          <input
            type="email"
            className={"form-control " + style["placeholder"]}
            onChange={(e)=>setEmail(e.target.value)}
            value={email}
          />

          <label className={"pt-1 " + style["text-size"]}>Password</label>
          <input
            type="password"
            className={"form-control " + style["placeholder"]}
            onChange={(e)=>setPassword(e.target.value)}
            value={password}
          />
          <label className={"pt-1 " + style["text-size"]}>
            {" "}
            Confirm Password
          </label>
          <input
            type="password"
            className={"form-control " + style["placeholder"]}
            onChange={(e)=>setConfirmPassword(e.target.value)}
            value={confirmPassword}
          />
          <hr />
          <input type="checkbox" className={"pt-1" + style["text-size"]} />
          <label className={"pt-1 ms-2 " + style["text-size"]}>
            I agree with <a  className={style["Terms"]} href="#">Terms</a> and <a className={style["Condition"]} href="#">Privacy</a>
          </label>
          <button
            className={
              "btn py-1 container-fluid mt-2 " + style["btn"]
            }
            type="button"
            onClick={HandleSubmit}
          >
            SignUp
          </button>

          <hr />
          <div className={"ms-2 " + style["account-text"]}>
            <p className="text-center">Already have an account ?</p>
            <a className={style["anchorTag"]}
              onClick={()=>appContext.dispatch({type:"SignUpClose"})}
            href="#">
              Login
            </a>
          </div>
        </form>
        {/* </div> */}
      </div>
    </div>
  );
}

export default SignUp;
