import { useContext } from "react";
import { TodoContex } from "../App";
import TaskSkelton from "./TaskSkelton";

function Tasks() {
  const appContext = useContext(TodoContex);
  return (
    <div>
      <div className="container">
        <div className="row">
          { appContext?.allTodos?.map((item, i) => (
            <TaskSkelton
              id={i}
              title={item.title}
              description={item.description}
              tags={item.border}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tasks;
