import React from "react"
import {FaTimesCircle} from 'react-icons/fa'

const Task = ({task, onDelete, onToggle}) => {
  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={()=>onToggle(task.id)}>
        <h3><FaTimesCircle style={{color:'red', marginRight:'5%'}} onClick={()=>onDelete(task.id)}/>{task.text}</h3>
        <p>{task.day}</p>
    </div>
  )
}

export default Task