import { FunctionComponent, useState } from "react";
import TodoAddForm from "./components/TodoAddForm/TodoAddForm";
import Filter from "./components/Filter/Filter";
import Todo, { Task } from "./components/Todo/Todo";

// Style
import "./index.scss";

const FILTER_MAP = {
  All: () => true,
  Active: (task: Task) => !task.completed,
  Completed: (task: Task) => task.completed,
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

const Task3: FunctionComponent = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<string>("All");

  function addTask(text: string): void {
    const newTask: Task = { id: Date.now(), text: text, completed: false };
    setTasks([...tasks, newTask]);
  }

  function toggleTaskCompleted(id: number): void {
    const updatedTasks: Task[] = tasks.map((task: Task) => {
      if (id === task.id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  function deleteTask(id: number): void {
    const remainingTasks: Task[] = tasks.filter((task: Task) => id !== task.id);
    setTasks(remainingTasks);
  }

  function editTask(id: number, newText: string): void {
    const editedTaskList: Task[] = tasks.map((task: Task) => {
      if (id === task.id) {
        return { ...task, text: newText };
      }
      return task;
    });
    setTasks(editedTaskList);
  }

  return (
    <div id="task-3" className="todoapp">
      <h1>Todo app</h1>
      <TodoAddForm  addTask={addTask} />
      <div className="todoapp__filters">
        {
          FILTER_NAMES.map((name) => (
            <Filter
              key={name}
              name={name}
              isPressed={name === filter}
              setFilter={setFilter}
            />
          ))
        }
      </div>
      <h2>Tasks: </h2>
      { tasks?.length === 0 && <p>You haven't created any tasks</p> }
      <ul className="todoapp__list">
        {
          tasks?.filter(FILTER_MAP[filter as keyof typeof FILTER_MAP])
            .map((task: Task) => (
              <Todo
                key={task.id}
                task={task}
                toggleCompleted={toggleTaskCompleted}
                delete={deleteTask}
                edit={editTask}
              />
            ))
        }
      </ul>
    </div>
  );
};

export default Task3;
