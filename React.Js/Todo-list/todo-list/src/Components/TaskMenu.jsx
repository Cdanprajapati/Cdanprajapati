import { useContext } from "react";
import EditDelete from "./EditDelete";
import{HiDotsHorizontal} from "react-icons/hi"
import { TodoContex } from "../App";

export default function TaskMenu(){
    const appContext = useContext(TodoContex)

    function handleEdit(){
        // (prestate=>!prestate)
        // appContext.dispatch({type:"EditClose"})
        appContext.dispatch({type: "TaskMenu"})
        
    }

    return <>    
        <div className="col-sm-2 text-end text-primary text-dark">  
                    
            <HiDotsHorizontal onClick={handleEdit} id="asfsda" style={{cursor:"pointer"}}/>
            { appContext.taskMenu && <EditDelete id={appContext.allTodos.id} setEditable={appContext.allTodos.setEditable}/> }

        </div>
    </> 
}