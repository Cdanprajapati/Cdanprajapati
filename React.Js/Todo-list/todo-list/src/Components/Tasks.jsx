import { useContext } from "react";
import { TodoContex } from "../App";
import TaskSkelton from "./TaskSkelton";

function Tasks() {
  const appContext = useContext(TodoContex);
  return (
    <div>
      <div className="container">
        <div className="row">
          {appContext?.allTodos?.map((item, i) => (
            <>
              <TaskSkelton
                key={i}
                id={i}
                title={item.title}
                description={item.description}
                tags={item.border}
                isDone={item.isDone}
                isCompleted= {item.isCompleted}
              />
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tasks;

