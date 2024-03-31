import './App.css';
import {useState} from 'react';
import { FaTrash } from "react-icons/fa";

function App() {
  
  let year = ()=>{
    let x = new Date()
    return x.getFullYear();
  }

  let btnstyle = {
    backgroundColor : "red",
    color : "white",
    marginLeft : "10px",
    border : "none",
    padding : "5px",
    borderRadius : "3px"

  }

  const deleteTask = function(id){
    const newTask = item.filter((task) => {
      if(task.id === id) return false;
      else return true;
    })
    setItem(newTask);
  }

  const completeTask = function(id){
    setItem(item.map((task)=>{
      if(task.id === id) return {...task, completed:true};
      else return task;
      })
    )
  }
  
  const [taskName, setTaskname] = useState("");
  const [item, setItem] = useState([]);
  
  return (
    <div className="App">
      <div className="conatiner">
        <header>
          <h1>Todo List</h1>
        </header>
        <main>

          <div className="input-field">
            <label htmlFor="">Enter Task</label>
            <input type="text" onChange={(e)=>{ setTaskname(e.target.value) } }/>
            <button style={btnstyle} onClick={() => {
              const task = {
                id : item.length === 0 ? 1 : item[item.length-1].id + 1,
                taskname : taskName,
                completed : false
              };
              const newItem = [...item,task];
              setItem(newItem);
            }}>Add Task</button>
          </div>

          <div className="tasks">
            <ul>
              {item.map((task) => (
                <li key={task.id}>
                  <input type="checkbox" checked={task.completed} onChange={()=>{completeTask(task.id)}}/>  
                  <label htmlFor="">{task.taskname}</label>
                  <FaTrash role="button" tabIndex="0" onClick={()=>{deleteTask(task.id)}}/>
                </li>
              ))}
            </ul>
          </div>
        </main>
        <footer>
          <p>Copyright &copy; {year()}</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
