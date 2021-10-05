import {TaskItem} from "./Taskitems"

function App() {
  return(
    <main>
        <form>
          <input type="text" placeholder="Task me"/>
          <button>Create Task</button>
        </form>
        <ul>
          <TaskItem isChecked={true} taskName="Learn React"/>
          <TaskItem isChecked={true} taskName="Lear Hooks"/>
          <TaskItem isChecked={true} taskName="Keep on Keeping on"/>
        </ul>
    </main>
  );
}

export default App;
