import TodoInput from '../Components/TodoInput';
import SignUp from '../Components/SignUp';
import React, { useContext } from "react";
import { TodoContex } from "../App";

function HomeChild({id}) {    
  const appContext = useContext(TodoContex);
  return (
    <div>
      {appContext.inputOpen && <TodoInput id={id} />}
      {appContext.signupOpen && <SignUp />}
    </div>
  )
}

export default HomeChild
