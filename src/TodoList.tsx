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
  const onAllFilterHandler = () => filterHandler('all')
  const onActiveFilterHandler = () => filterHandler('active')
  const onCompletedFilterHandler = () => filterHandler('completed')
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
            tasks.map(task => {
              const removeTaskHandler = () => removeTask(task.id)
              return (
                  <li key={task.id}><input checked={task.isDone} type="checkbox"/>{task.title}
                    <button onClick={removeTaskHandler}>x</button>
                  </li>
              )
            })
          }
        </ul>
        <div>
          <button onClick={onAllFilterHandler}>All</button>
          <button onClick={onActiveFilterHandler}>Active</button>
          <button onClick={onCompletedFilterHandler}>Completed</button>
        </div>
      </div>
  )
}
