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
  changeStatus: (id: string) => void
}

export function TodoList({title, tasks, removeTask, filterHandler, addTask, changeStatus}: PropsType) {
  const [newTitleTask, setNewTitleTask] = useState('')
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setNewTitleTask(e.target.value)
  const addTaskHandler = () => {
    if (newTitleTask.trim().length) {
      addTask(newTitleTask)
      setNewTitleTask('')
    }
  }
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter' && newTitleTask.trim().length) {
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
              const onChangeStatusHandler = () => changeStatus(task.id)
              return (
                  <li key={task.id}>
                    <input
                        onChange={onChangeStatusHandler}
                        checked={task.isDone}
                        type="checkbox"/>
                    <span>{task.title}</span>
                    <span className={'delete'} onClick={removeTaskHandler}>&times;</span>
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
