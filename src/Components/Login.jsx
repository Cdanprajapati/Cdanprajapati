import React, { useContext, useState, useEffect } from "react";
import { RxCross1 } from "react-icons/rx";
import { TodoContex } from "../App";
import {AiFillEye} from 'react-icons/ai';
import {AiFillEyeInvisible} from "react-icons/ai";
import style from "../Assets/Style/Login.module.css";
import useFetchAPI from "../hook/useFetchAPI";

function Login() {
  const appContext = useContext(TodoContex);
  const loginAPI = useFetchAPI();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [post, getPost] = useState(null); 

  const API = 'https://todo-api-xu4f.onrender.com/user/login';

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const handleLogin = () => {
    let data = {email, password}
    loginAPI("user/login", "POST", data, getPost) 
    
  }
  useEffect(() =>
    {if(post!==null){
      localStorage.setItem("token", post.access_token)
      alert("user logged in");
    }
  }, [post])

  return (  
            <div className={"card shadow-lg p-3  rounded " + style["Body"]}>
              <form>
                <div className="row d-flex">
                  <div className="col-sm-6 d-flex">                 
                    <h5 className="text-bold">Log in</h5>
                  </div>
                  <div className="col-sm-4 d-flex"></div>
                  <div className={"col-sm-2 d-flex"+style["Cross"]}>
                    <b onClick={()=>appContext.dispatch({type:"Loginclose"})}>
                      <RxCross1 />
                    </b>
                  </div>
                </div>              

                <label className={"pt-1 " + style["text-size"]}>Email</label>
                <input
                  type="email"
                  value={email}
                  className={"form-control " + style["placeholder"]}
                  onChange={(e)=>setEmail(e.target.value)}
                />

                <label className={"pt-1 " + style["text-size"]}>Password</label>
                <input
                  type={ appContext.visible ? "text" : "password"}
                  className={"form-control " + style["placeholder"]}
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
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
                  onClick={handleLogin}
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
