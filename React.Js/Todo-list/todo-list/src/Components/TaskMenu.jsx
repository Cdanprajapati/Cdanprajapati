import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "../Assets/Style/TaskSkelton.module.css";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import EditDelete from "./EditDelete";
import{HiDotsHorizontal} from "react-icons/hi"

export default function TaskMenu(){
    const [edit, setEdit] = useState(false);

    return <>
    
    <div className="col-sm-2 text-end text-primary text-dark">                
        <HiDotsHorizontal onClick={() => setEdit( preState=>!preState)} id="asfsda" style={{cursor:"pointer"}}/>
        {edit && <EditDelete />}
    </div>
    </> 
}