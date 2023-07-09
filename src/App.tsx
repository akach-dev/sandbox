import React, {useState} from 'react';
import './App.css';
import {TaskType, TodoList} from "./TodoList";

export function App() {
  const [tasks, setTasks] = useState<Array<TaskType>>([
    {id: 1, title: 'HTML & CSS', isDone: true},
    {id: 2, title: 'JS', isDone: true},
    {id: 3, title: 'React JS', isDone: false},
    {id: 4, title: 'Redux', isDone: false}
  ])
  const [filter, setFilter] = useState('active')
  const removeTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id))
  }
  let taskForTodoList = tasks
  if (filter === 'activ') {
    taskForTodoList = tasks.filter(task => task.isDone === true)
  }
  if (filter === 'completed') {
    taskForTodoList = tasks.filter(task => task.isDone === false)
  }
  return (
      <div className="App">
        <TodoList
            removeTask={removeTask}
            tasks={taskForTodoList}
            title={'What to learn'}/>
      </div>
  );
}
