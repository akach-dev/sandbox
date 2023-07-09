import React, {useState} from 'react';
import './App.css';
import {TaskType, TodoList} from "./TodoList";

export type FilterValuesType = 'all' | 'completed' | 'active'

export function App() {
  const [tasks, setTasks] = useState<TaskType[]>([
    {id: 1, title: 'HTML & CSS', isDone: true},
    {id: 2, title: 'JS', isDone: true},
    {id: 3, title: 'React JS', isDone: false},
    {id: 4, title: 'Redux', isDone: false}
  ])
  const [filter, setFilter] = useState<FilterValuesType>(`all`)
  const removeTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id))
  }
  const filterHandler = (value: FilterValuesType) => setFilter(value)
  let taskForTodoList = tasks
  if (filter === 'active') {
    taskForTodoList = tasks.filter(task => task.isDone)
  }
  if (filter === 'completed') {
    taskForTodoList = tasks.filter(task => !task.isDone)
  }
  return (
      <div className="App">
        <TodoList
            filterHandler={filterHandler}
            removeTask={removeTask}
            tasks={taskForTodoList}
            title={'What to learn'}/>
      </div>
  );
}
