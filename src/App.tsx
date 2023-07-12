import {useState} from "react";
import {v1} from "uuid";
import "./App.css";
import {TaskType, TodoList} from "./TodoList";

export type FilterValuesTypes = "all" | "active" | "completed";

export function App() {
  let [tasks, setTasks] = useState<TaskType[]>([
    {id: v1(), title: "HTML & CSS", isDone: true},
    {id: v1(), title: "JS", isDone: true},
    {id: v1(), title: "React JS", isDone: false},
    {id: v1(), title: "Redux", isDone: false},
    {id: v1(), title: "ReduxToolkit", isDone: false},
  ]);
  const [filter, setFilter] = useState<FilterValuesTypes>("all");

  const addTask = (value: string) => {
    setTasks([
      ...tasks,
      {
        id: v1(),
        title: value,
        isDone: false,
      },
    ]);
  };

  const removeTask = (id: string) => setTasks(tasks.filter((task) => task.id !== id));

  const filterTasks = (value: FilterValuesTypes) => setFilter(value);

  const changeStatus = (id: string) => {
    setTasks(
        tasks.map((task) => {
          if (task.id !== id) return task;
          return {
            ...task,
            isDone: !task.isDone,
          };
        })
    );
  };
  switch (filter) {
    case "active":
      tasks = tasks.filter((task) => task.isDone);
      break;
    case "completed":
      tasks = tasks.filter((task) => !task.isDone);
      break;
  }
  return (
      <div className="App">
        <TodoList
            tasks={tasks}
            addTask={addTask}
            removeTask={removeTask}
            filterTasks={filterTasks}
            changeStatus={changeStatus}
            title={'What to learn'}
        />
      </div>
  );
}
