import React from "react";

export type TaskType = {
  id: number
  title: string
  isDone: boolean
}
type PropsType = {
  title: string
  tasks: TaskType[];
  removeTask: (id: number) => void
}

export function TodoList({title, tasks, removeTask}: PropsType) {
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
          <button>All</button>
          <button>Active</button>
          <button>Completed</button>
        </div>

      </div>
  )
}
