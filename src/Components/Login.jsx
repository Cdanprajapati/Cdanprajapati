import React from 'react';
import {RxCross1} from "react-icons/rx";
import style from '../Assets/Style/Login.module.css';

function Login() {
  return (
    <div>
        <div className={"card shadow-lg p-3  p-3 rounded "+style["Body"]}>
                {/* <div className="card-body"> */}
                    <form>
                      <div className="row">
                        <div className="col-sm-6">
                          <h5  className="text-bold">Log in</h5>
                        </div>
                        <div className="col-sm-4"></div>
                        <div className="col-sm-2">
                          <b><RxCross1 /></b>
                        </div>
                      </div>
                      {/* <hr className="pt-0"/> */}
                    

                      <label className={"pt-1 "+style["text-size"]}>Email</label>
                      <input type="email" className={"form-control "+style["placeholder"]} placeholder="Enter your email name" />

                      <label className={"pt-1 "+style["text-size"]}>Password</label>
                      <input type="password" className={"form-control "+style["placeholder"]} placeholder="Enter your password" />

                      <hr />
                      <input
                        type="checkbox"
                        className={"pt-1"+style["text-size"]}
                      />
                      <label className={"pt-1 ms-2 "+style["text-size"]}>
                        I agree with <a href="#">Terms</a> and <a href="#">Privacy</a>
                      </label>
                      <button
                        className={"btn py-1 btn-primary container-fluid mt-2 "+style["btn"]}
                        type="button"
                      >
                        Log in
                      </button>

                      <a className={style["forget"]} href="#" >Forgot Password ?</a>

                      <hr />
                      <div className={"ms-2 "+style["account-text"]}>
                        <p className="text-center">Already have an account ?</p>
                        <a className={style["anchorTag"]}  href="#">Sign Up</a>
                      </div>
                    </form>                  
                {/* </div> */}
              </div>   
    </div>
  )
}

export default Login;
