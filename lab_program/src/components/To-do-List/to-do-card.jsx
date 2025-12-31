import { useState } from 'react';
import './to-do-card.css';

export default function ToDoCard() {
  const[task, setTask] = useState();
  return (
    <>
    <div className="todo-card">
      <h2>To-Do Item</h2>
      <input type="text" placeholder="enter new task " onKeyUp={(event)=>{setTask(event.target.value)}}/>
      <button onClick={()=>{console.log(task)}}>add</button>
      <div className="no-task">NO TASK YET</div>
    </div>
    </>
  )
}
