import {useState} from "react";
import {TaskItem} from "./Taskitems";

function App() {
  const [task, setTasks] = useState([
    {
    isCompleted:true,
    name:"Learn React",
  },
  {
    isCompleted:false,
    name:"Learn Hooks",
  },
  {
    isCompleted:true,
    name:"Keep on Keeping on",
  },
  ]);


  const handleTaskChange =()=>{
    console.log("changed!")
  }

  return(
    <main>
        <form>
          <input type="text" placeholder="Task me"/>
          <button>Create Task</button>
        </form>
        <ul>
          {task.map(task =>{
            return (
            <TaskItem isChecked={task.isCompleted}
             taskName={task.name}
             onTaskChange={handleTaskChange}/>
            )
          })}
        </ul>
    </main>
  );
}

export default App;
