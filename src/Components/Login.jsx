import React from "react";
import style from "../Assets/Style/Login.module.css";

function Login() {
  return (
    <div className="row bg-secondary">
      <div className="col-sm-6">
        <div className="row">
          <div className="col-sm-2"></div>
          <div className="col-sm-8">
            <div className="container ">
              <div class="card shadow-lg p-3 mb-5 rounded ">
                <div class="card-body">
                  <div className="container">
                    <form>
                      {/* Head part */}
                      <div className="row">
                        <div className="col-sm-4">
                          <p  className={style["text-size"]}>Sign Up</p>
                        </div>
                        <div className="col-sm-6"></div>
                        <div className="col-sm-2">
                          <b>X</b>
                        </div>
                        {/* End-Head Part */}
                      </div>
                      <hr className="pt-0"/>
                      <label className={style["text-size"]}>First Name</label>
                      <input type="text" className={"form-control "+style["placeholder"]} placeholder="Enter your first name" />
                    
                      <label className={"pt-1 "+style["text-size"]}>Last Name</label>
                      <input type="text" className={"form-control "+style["placeholder"]} placeholder="Enter your last name"  />

                      <label className={"pt-1 "+style["text-size"]}>Email</label>
                      <input type="email" className={"form-control "+style["placeholder"]} placeholder="Enter your email name" />

                      <label className={"pt-1 "+style["text-size"]}>Password</label>
                      <input type="password" className={"form-control "+style["placeholder"]} placeholder="Enter your password" />

                      <label className={"pt-1 "+style["text-size"]}> Confirm Password</label>
                      <input type="password" className={"form-control "+style["placeholder"]} placeholder="Enter your Confirm password" />
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
                        Sign Up
                      </button>
                      <hr />
                      <div className={"pt-1 ms-2 "+style["account-text"]}>
                        <p className="text-center">Already have an account ?</p>
                        <a className={"pt-1 px-5 mx-5  "+style["anchor-tag"]}  href="#">Log in</a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-2"></div>
        </div>
      </div>
      <div className="col-sm-6"></div>
    </div>
  );
}

export default Login;
