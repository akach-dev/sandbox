import React, {ChangeEvent, useState} from "react";
import {FilterValuesType} from "./App";

export type TaskType = {
  id: string
  title: string
  isDone: boolean
}
type PropsType = {
  title: string
  tasks: TaskType[];
  removeTask: (id: string) => void
  filterHandler: (value: FilterValuesType) => void
  addTask: (value: string) => void
}

export function TodoList({title, tasks, removeTask, filterHandler, addTask}: PropsType) {
  const [newTitleTask, setNewTitleTask] = useState('')
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setNewTitleTask(e.target.value)
  const addTaskHandler = () => {
    addTask(newTitleTask)
    setNewTitleTask('')
  }
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter') {
      addTask(newTitleTask)
      setNewTitleTask('')
    }
  }
  return (
      <div>
        <h3>{title}</h3>
        <div>
          <input
              value={newTitleTask}
              onChange={onChangeHandler}
              onKeyDown={handleKeyPress}
          />

          <button onClick={addTaskHandler}>+</button>
          
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
