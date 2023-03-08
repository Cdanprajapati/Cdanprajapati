import TodoInput from '../Components/TodoInput';
import Pool from '../ChildComponent/Pool';
import React, { useContext } from "react";
import { TodoContex } from "../App";

function HomeChild({id}) {    
  const appContext = useContext(TodoContex);

  const Token = localStorage.getItem("token");
  const initialValue = JSON.parse(Token)
  console.log(initialValue,"9999999")

  // if(initialValue.length>0){
  //   appContext.dispatch({type:"YouCanLogin"})
  //   alert("yes ti si done")
  // }

  return (
    <div>
      {appContext.loginSuccess ?  <> {appContext.inputOpen && <TodoInput id={id} />} </>  : "" }
      {appContext.loginOpen && <Pool />}
    </div>
  )
}

export default HomeChild
