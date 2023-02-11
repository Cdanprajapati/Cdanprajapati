import { useState } from "react";
import EditDelete from "./EditDelete";
import{HiDotsHorizontal} from "react-icons/hi"

export default function TaskMenu(props){
    const [edit, setEdit] = useState(setShowTodoInput={setShowTodoHome} ? true : false);

    return <>    
        <div className="col-sm-2 text-end text-primary text-dark">    
                    
            <HiDotsHorizontal onClick={() =>setEdit( preState=>!preState)} id="asfsda" style={{cursor:"pointer"}}/>

            { edit &&  <EditDelete id={props.id} setEditable={props.setEditable}/> }

        </div>
    </> 
}