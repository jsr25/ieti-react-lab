function App() {
  return(
    <main>
        <form>
          <input type="text" placeholder="Task me"/>
          <button>Create Task</button>
        </form>

        <ul>
          <li>
          <input checked="true" type="checkbox"/>
          <span>Learn React</span>
          </li>
          <li>
          <input type="checkbox"/>
          <span>Lear Hooks</span>
          </li>
          <li>
          <input type="checkbox"/>
          <span>Keep on Keeping on</span>  
          </li>
        </ul>
    </main>
  );
}

export default App;
