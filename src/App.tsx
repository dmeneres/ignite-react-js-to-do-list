import "./global.css";
import "./App.css";
import { Header } from "./components/Header";
import { CreateNewTask } from "./components/CreateNewTask";
import { useState } from "react";
import { TaskHeader } from "./components/TaskHeader";
import { TaskItem } from "./components/TaskItem";

interface TaskProps {
  title: string;
  isCompleted: boolean;
}

function App() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  function addTask(taskTitle: string) {
    setTasks([
      ...tasks,
      {
        title: taskTitle,
        isCompleted: false,
      },
    ]);
  }

  function finishTask(task: string) {
    const index = tasks.findIndex((e) => e.title === task);
    const newTasks = [...tasks];
    if (newTasks[index].isCompleted) {
      newTasks[index].isCompleted = false;
    } else {
      newTasks[index].isCompleted = true;
    }

    setTasks(newTasks);
  }

  function deleteTask(task: string) {
    const index = tasks.findIndex((e) => e.title === task);
    const newTasks = [...tasks];
    newTasks.splice(index, 1);

    setTasks(newTasks);
  }

  function countTasksCreated() {
    return tasks.length;
  }

  function countTasksCompleted() {
    let count = 0;

    for (let task in tasks) {
      if (tasks[task].isCompleted === true) {
        count++;
      }
    }

    return count;
  }

  return (
    <>
      <Header />
      <CreateNewTask onAddTask={addTask} />
      <TaskHeader
        tasksCreated={countTasksCreated()}
        tasksCompleted={countTasksCompleted()}
      />

      {tasks.length === 0 ? (
        <div className="noTasksContainer">
          <img src="/static/images/clipboard.svg" />
          <b>You don't have any tasks</b>
          <p>Create tasks and organize your todo's</p>
        </div>
      ) : (
        <div className="tasksContainer">
          {tasks.map((item) => (
            <TaskItem
              handleDeleteTask={deleteTask}
              handleFinishTask={finishTask}
              key={item.title}
              task={item.title}
              isCompleted={item.isCompleted}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default App;
