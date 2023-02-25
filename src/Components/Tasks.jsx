import { useContext } from "react";
import { TodoContex } from "../App";
import TaskSkelton from "./TaskSkelton";

function Tasks() {
  const appContext = useContext(TodoContex);
  // let finalTodo = appContext.allTodos;
  //  const donetask = appContext.allTodos.filter((item) => item.isDone !== true)

  //  if(appContext.hideDoneTask) {
  //   finalTodo = donetask 
  //  }else{
  //   finalTodo = appContext.allTodos
  //  }

  return (
    <div>
      <div className="container">
        <div className="row">
          {appContext.allTodos?.map((item, i) => (
            <>
               <TaskSkelton
                key={i}
                id={i}
                title={item.title}
                description={item.description}
                tags={item.tags}
                isDone={item.isDone}
                isCompleted={item.isCompleted}
                // isHide={item.isHide}
              />
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tasks;

