import {useState} from "react";
import {TaskItem} from "./Taskitems";

function App() {
  const [tasks, setTasks] = useState([
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

  const [textValue, setTextValue] =useState("");

  const handleTaskChange =(index) =>() =>{
    console.log("changed!"+ index)
    const arr = [...tasks];
    arr[index].isCompleted= !arr[index].isCompleted;
    setTasks(arr); 
  };

  const addTask = (name) =>{
    const newTask = {
      isCompleted = false,
      name = name,
    };
    setTasks([...tasks, newTask])
  }

  const handlesubmit= (event)=>{
    event.preventDefault();
    console.log(textValue);
    addTask(textValue);
  };
  const HandletextChange =(event) =>{
    const value =event.target.value;
    setTextValue(value);
  };
  return(
    <main>
        <form onSubmit={handlesubmit}>
          <input value={textValue} onChange={HandletextChange} type="text" placeholder="Task me"/>
          <button>Create Task</button>
        </form>
        <ul>
          {task.map(tasks, index =>{
            return (
            <TaskItem isChecked={tasks.isCompleted}
             taskName={tasks.name}
             onTaskChange={handleTaskChange(index)}/>
            )
          })}
        </ul>
    </main>
  );
}

export default App;
