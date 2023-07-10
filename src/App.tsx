import React, {useState} from 'react';
import {v1} from 'uuid';
import './App.css';
import {TaskType, TodoList} from "./TodoList";

export type FilterValuesType = 'all' | 'completed' | 'active'

export function App() {
  const [tasks, setTasks] = useState<TaskType[]>([
    {id: v1(), title: 'HTML & CSS', isDone: true},
    {id: v1(), title: 'JS', isDone: true},
    {id: v1(), title: 'React JS', isDone: false},
    {id: v1(), title: 'Redux', isDone: false}
  ])
  const [filter, setFilter] = useState<FilterValuesType>(`all`)
  const removeTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id))
  }
  const addTask = (value: string) => setTasks([...tasks, {id: v1(), title: value, isDone: false}])
  const filterHandler = (value: FilterValuesType) => setFilter(value)
  let taskForTodoList = tasks
  switch (filter) {
    case 'active':
      taskForTodoList = tasks.filter(task => task.isDone)
      break;
    case 'completed':
      taskForTodoList = tasks.filter(task => !task.isDone)
      break;
  }
  return (
      <div className="App">
        <TodoList
            addTask={addTask}
            filterHandler={filterHandler}
            removeTask={removeTask}
            tasks={taskForTodoList}
            title={'What to learn'}/>

      </div>
  );
}
