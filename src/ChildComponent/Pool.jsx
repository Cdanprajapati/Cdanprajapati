import React, {useContext} from "react";
import {TodoContex} from '../App';
import style from "../Assets/Style/Pool.module.css";
import SignUp from "../Components/SignUp";
import Login from "../Components/Login";
import ForgetPassword from "./ForgetPassword";

function Pool() {
    const appContext = useContext(TodoContex);
  return (
    <div>
      <div className={style["Section"]}>
        <div className="container">
          <div className={style["loader"]}>
            {appContext.forgetpasswordOpen ? <ForgetPassword/> :
            <>
           {appContext.signUpOpen ? <SignUp/> :  <Login /> } 
           </> 
           }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pool;
