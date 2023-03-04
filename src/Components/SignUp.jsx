import React, { useContext, useState } from "react";
import { TodoContex } from "../App";
import "react-toastify/dist/ReactToastify.css";
import style from "../Assets/Style/SignUp.module.css";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import useFetchAPI from "../hook/useFetchAPI";
import { RxCross1 } from "react-icons/rx";

function SignUp() {
  const appContext = useContext(TodoContex);
  const loginAPI = useFetchAPI();
  const [firstName, setFirstName] = useState("");
  const [fnameErr, setFnameErr] = useState(false);
  const [lastName, setlastName] = useState("");
  const [lnameErr, setlnameErr] = useState(false);
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordErr, setPasswordErr] = useState(false);
  const [confirm_password, setConfirm_Password] = useState("");
  const [cnfpassword, setCnfpassword] = useState(false);
  const [post, getPost] = useState([]);

  const API = "https://todo-api-xu4f.onrender.com/user/register";

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const HandleSubmit = () => { 
   if(firstName.length<3){
          setFnameErr(true)
        }else {
          setFnameErr(false)
        }
        if(lastName.length<3){
          setlnameErr(true);
        }else {
          setlnameErr(false)
        }
        if(email.length<5){
          setEmailErr(true);
        }else {
          setEmailErr(false)
        }
        if(password.length<4){
          setPasswordErr(true);
        }else {
          setPasswordErr(false)
        }
        if(confirm_password.length<4){
          setCnfpassword(true);
        }

    else{
    let data = { firstName, lastName, email, password, confirm_password };
    loginAPI("user/register", "POST", data, getPost);
    appContext.dispatch({ type: "SignUpClose" });
    appContext.dispatch({ type: "ToastOpen" });
  
    function greet() {
      appContext.dispatch({ type: "ToastClose" });
    }
    setTimeout(greet, 2000);
    }
  };

  // const onSubmitHandle = () => {}; 
  // }
  // const [state, setState] = useState({
  //   firstName : "",
  // })
  // const Error = (e) => setState(p=>({...p, firstName: event.target.value}))
  // console.log(post, "--->");

  return (
    <div>
      <div className={"card shadow-lg p-3  p-3 rounded " + style["Body"]}>
        {/* <div className="card-body"> */}
        <form >
          <div className="row d-flex">
            <div className="col-sm-6 d-flex">
              <h5 className="text-bold">Sign Up</h5>
            </div>
            <div className="col-sm-4 d-flex"></div>
            <div className="col-sm-2 d-flex">
              <b
                className={style["Xcross"]}
                onClick={() => appContext.dispatch({ type: "Loginclose" })}
              >
                <RxCross1 />
              </b>
            </div>
          </div>

          <label className={style["text-size"]}>First Name</label>
          <input
            type="text"
            className={"form-control " + style["placeholder"]}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder={fnameErr ?"First Name is required" : "" }
            name="firstName"           
            value={firstName}
          />          
   

          <label className={"pt-1 " + style["text-size"]}>Last Name</label>
          <input
            type="text"
            className={"form-control " + style["placeholder"]}
            name="lastName"
            placeholder={lnameErr ? "Last Name is required" : "" }
            onChange={(e) => setlastName(e.target.value)}
            value={lastName}
          />

          <label className={"pt-1 " + style["text-size"]}>Email</label>
          <input
            type="email"
            className={"form-control " + style["placeholder"]}
            name="email"
            placeholder={ emailErr ? "email is required" : "" }
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        

          <label className={"pt-1 " + style["text-size"]}>Password</label>
          <input
            type={appContext.visible ? "text" : "password"}
            className={"form-control " + style["placeholder"]}
            name="password"
            placeholder={ passwordErr ? "password is required" : " " }
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />    
          <div
            className={style["EyeIcons"]}
            onClick={() => appContext.dispatch({ type: "VisiblePassword" })}
          >
            {appContext.visible ? <AiFillEye /> : <AiFillEyeInvisible />}
          </div>
         
          <label className={"pt-1 " + style["text-size"]}>
            {" "}
            Confirm Password
          </label>
          <input
            type={appContext.visiblecnfpassword ? "text" : "password"}
            className={"form-control " + style["placeholder"]}
            name="confirm_password"
            placeholder={ cnfpassword ? "Confirm password is required" : " " }
            onChange={(e) => setConfirm_Password(e.target.value)}
            value={confirm_password}
          />   
          <div
            className={style["EyeIcons"]}
            onClick={() =>
              appContext.dispatch({ type: "VisibleConfirmPassword" })
            }
          >
            {appContext.visiblecnfpassword ? (
              <AiFillEye />
            ) : (
              <AiFillEyeInvisible />
            )}
          </div>
        
          <hr />
          <input type="checkbox" className={"pt-1" + style["text-size"]} />
          <label className={"pt-1 ms-2 " + style["text-size"]}>
            I agree with{" "}
            <a className={style["Terms"]} href="#">
              Terms
            </a>{" "}
            and{" "}
            <a className={style["Condition"]} href="#">
              Privacy
            </a>
          </label>
          <button
            className={"btn py-1 container-fluid mt-2 " + style["btn"]}
            type="button"
            onClick={HandleSubmit}
          >
            SignUp
          </button>

          <hr />
          <div className={"ms-2 " + style["account-text"]}>
            <p className="text-center">Already have an account ?</p>
            <a
              className={style["anchorTag"]}
              onClick={() => appContext.dispatch({ type: "SignUpClose" })}
              href="#"
            >
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
