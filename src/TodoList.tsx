import {ChangeEvent, KeyboardEvent, useState} from "react";
import {FilterValuesTypes} from "./App";

export type TaskType = {
  id: string;
  title: string;
  isDone: boolean;
};
type PropTypes = {
  title: string
  tasks: TaskType[];
  addTask: (value: string) => void;
  removeTask: (value: string) => void;
  filterTasks: (value: FilterValuesTypes) => void;
  changeStatus: (id: string) => void;
};

export function TodoList({tasks, addTask, removeTask, filterTasks, changeStatus, title}: PropTypes) {
  const [titleTask, setTitleTask] = useState("");
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setTitleTask(e.currentTarget.value);
  const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter" && titleTask.trim().length) {
      addTask(titleTask);
      setTitleTask("");
    }
  };
  const addTaskHandler = () => {
    if (titleTask.trim().length) {
      addTask(titleTask);
      setTitleTask("");
    }
  };
  const onAllFilterHandler = () => filterTasks("all");
  const onActiveFilterHandler = () => filterTasks("active");

  const onCompletedFilterHandler = () => filterTasks("completed");
  return (
      <div>
        <h1>{title}</h1>
        <div>
          <input
              value={titleTask}
              onChange={onChangeHandler}
              onKeyDown={onKeyDownHandler}
          />
          <button onClick={addTaskHandler}>+</button>
        </div>
        <ul>
          {tasks.map((task) => {
            const removeTaskHandler = () => removeTask(task.id);
            const changeStatusHandler = () => changeStatus(task.id);
            return (
                <li key={task.id}>
                  <input
                      type="checkbox"
                      checked={task.isDone}
                      onChange={changeStatusHandler}
                  />
                  <span>{task.title}</span>
                  <span
                      className="delete"
                      onClick={removeTaskHandler}
                  >
                &times;
              </span>
                </li>
            );
          })}
        </ul>
        <div>
          <span>What</span>
          <button onClick={onAllFilterHandler}>All</button>
          <button onClick={onActiveFilterHandler}>Active</button>
          <button onClick={onCompletedFilterHandler}>Completed</button>
        </div>
      </div>
  );
}
