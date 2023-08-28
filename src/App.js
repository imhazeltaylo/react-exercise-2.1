// import logo from './logo.svg';
// import './App.css';
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState , useEffect} from "react";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [task, setTasks] = useState([]);

  useEffect(()=>{
    const getTasks = async()=>{
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks();
  },[]);

  const fetchTasks =  async()=>{
    const res = await fetch('http://localhost:5000/task/');
    const data = await res.json();
    return data
  }

  const fetchTask =  async(id)=>{
    const res = await fetch(`http://localhost:5000/task/${id}`);
    const data = await res.json();
    return data
  }

  const toggleActive = async (id)=>{
    const taskToToggle = await fetchTask(id)
    const updTask = {...taskToToggle, reminder:!taskToToggle.reminder}

    const res = await fetch(`http://localhost:5000/task/${id}`,{
      method: 'PUT',
      headers: {
        'Content-type':'application/json'
      },
      body: JSON.stringify(updTask)
    })
    
    const data = await res.json();
    setTasks(
      task.map((task)=>
      task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  // const toggleActive = (id)=>{
  //   setTasks(
  //     task.map((task)=>
  //     task.id === id ? {...task, reminder: !task.reminder} : task))
  // }

  // const addTask = (tasklist)=>{
  //   const id = Math.floor(Math.random() * 10000) + 1;
  //   const newTask = {id, ...tasklist}

  //   setTasks([...task, newTask])
  // }

  // const deleteTask = (id)=>{
  //   setTasks(task.filter((task)=>task.id !== id));
  // }

  const addTask = async (tasklist)=>{
    const res = await fetch(`http://localhost:5000/task` , {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(tasklist)
    })
    const data = await res.json()

    setTasks([...task, data]);
  }

  const deleteTask = async (id)=>{
    await fetch(`http://localhost:5000/task/${id}`,{method: 'DELETE'})
    setTasks(task.filter((task)=>task.id !== id));
  }

  return (
    <div className="container animate__heartBeat">
      <Header onAdd={()=>setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {task.length > 0 ? <Tasks task={task} onDelete={deleteTask} onToggle={toggleActive}/> : 'No tasks to accomplish'}
    </div>
  );
}

export default App;
