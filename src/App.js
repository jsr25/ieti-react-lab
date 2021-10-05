import {useState} from "react";
import {TaskItem} from "./Taskitems";

function App() {
  const [task, setTasks] = useState([
    {
    isCompleted:true,
    name:"Learn React",
  },
  {
    isCompleted:true,
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
          <TaskItem isChecked={true} taskName="Learn React" onTaskChange={handleTaskChange}/>
          <TaskItem isChecked={false} taskName="Lear Hooks" onTaskChange={handleTaskChange}/>
          <TaskItem isChecked={true} taskName="Keep on Keeping on" onTaskChange={handleTaskChange}/>
        </ul>
    </main>
  );
}

export default App;
