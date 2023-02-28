import { useContext } from "react";
import { TodoContex } from "../App";
import TaskSkelton from "./TaskSkelton";
function Tasks() {
  const appContext = useContext(TodoContex);
  console.log("hideDoneTask",appContext)
  return (
    <div>
      <div className="container">
        <div className="row">
            {
              appContext.filterTask ?
              appContext.filterTodos.map((item,i) => {
                return  <> 
                {
                (item.isDone == true && appContext.hideDoneTask == true )?null:  
                   <TaskSkelton
                    key={i}
                    id={i}
                    title={item.title}
                    description={item.description}
                    tags={item.tags}
                    isDone={item.isDone}
                    isCompleted={item.isCompleted}
                  />
                }
                
                </>
              }) :
              appContext.allTodos?.map((item, i) => {
                return  <> 
                 {
                 (item.isDone == true && appContext.hideDoneTask == true )?null:
                    <TaskSkelton
                     key={i}
                     id={i}
                     title={item.title}
                     description={item.description}
                     tags={item.tags}
                     isDone={item.isDone}
                     isCompleted={item.isCompleted}
                   />
                 }
                 </>
               })
            }
        </div>
      </div>
    </div>
  );
}
export default Tasks;