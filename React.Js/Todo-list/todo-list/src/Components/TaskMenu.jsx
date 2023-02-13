import { useContext, useState } from "react";
import EditDelete from "./EditDelete";
import{HiDotsHorizontal} from "react-icons/hi"
import { TodoContex } from "../App";

export default function TaskMenu(){
    const appContext = useContext(TodoContex)
    const [edit, setEdit] = useState( );

    function handleEdit(){
        setEdit(prestate=>!prestate)
        appContext.dispatch({type:"EditClose"})
    }

    // this is 

    return <>    
        <div className="col-sm-2 text-end text-primary text-dark">  
                    
            <HiDotsHorizontal onClick={handleEdit} id="asfsda" style={{cursor:"pointer"}}/>
            { edit &&  <EditDelete id={appContext.id} setEditable={appContext.setEditable}/> }

        </div>
    </> 
}