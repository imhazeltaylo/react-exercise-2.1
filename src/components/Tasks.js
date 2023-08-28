// import { useState } from "react";
import Task from "./Task"

const Tasks = ({task, onDelete, onToggle})=>{
    return(
        <>
            {/* {task.map((task)=>(<Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>))} */}
            {task.map((task,index)=>(<Task key={index} task={task} onDelete={onDelete} onToggle={onToggle}/>))}
        </>
    );
}

export default Tasks