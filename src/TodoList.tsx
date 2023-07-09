import React from "react";
import {FilterValuesType} from "./App";

export type TaskType = {
  id: number
  title: string
  isDone: boolean
}
type PropsType = {
  title: string
  tasks: TaskType[];
  removeTask: (id: number) => void
  filterHandler: (value: FilterValuesType) => void
}

export function TodoList({title, tasks, removeTask, filterHandler}: PropsType) {
  return (
      <div>
        <h3>{title}</h3>
        <div>
          <input/>
          <button>+</button>
        </div>
        <ul>
          {
            tasks.map(task => <li key={task.id}><input checked={task.isDone} type="checkbox"/>{task.title}
              <button onClick={() => removeTask(task.id)}>x</button>
            </li>)
          }
        </ul>
        <div>
          <button onClick={() => filterHandler('all')}>All</button>
          <button onClick={() => filterHandler('active')}>Active</button>
          <button onClick={() => filterHandler('completed')}>Completed</button>
        </div>

      </div>
  )
}
