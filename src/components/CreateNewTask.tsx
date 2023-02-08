import { ChangeEvent, FormEvent, useState } from "react";
import styles from "./CreateNewTask.module.css";

interface Props {
  onAddTask: (taskTitle: string) => void;
}

export function CreateNewTask({ onAddTask }: Props) {
  const [title, setTitle] = useState("");

  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
    console.log(event);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    onAddTask(title);
    setTitle("");
  }

  return (
    <form onSubmit={handleSubmit} className={styles.createNewTaskContainer}>
      <input
        onChange={onChangeTitle}
        className={styles.taskInput}
        placeholder="Create new task"
        type="text"
        value={title}
      />
      <button className={styles.createButton} type="submit">
        <p>Create</p>
        <img src="/static/images/plus-create-button.svg" alt="" />
      </button>
    </form>
  );
}
