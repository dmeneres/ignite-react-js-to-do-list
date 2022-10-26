import styles from './TaskItem.module.css'

interface Props {
  task: string;
  handleFinishTask: (task: string) => void;
  isCompleted: boolean;
  handleDeleteTask: (task: string) => void;
}

export function TaskItem({ task, handleFinishTask, isCompleted, handleDeleteTask }: Props) {
  return (
    <div className={styles.taskItem}>
      <label htmlFor={task}>
        <input 
          type="checkbox" 
          id={task} 
          className={styles.checkInput} 
          name="checkboxInput" 
        />
        <div onClick={() => handleFinishTask(task)} className={styles.checkBox}></div>
      </label>
      
      {
        isCompleted ?
        <s className={styles.text} >
          {task}
        </s> :
        <p className={styles.text}>
          {task}
        </p>
      }

      <button onClick={() => handleDeleteTask(task)} className={styles.delete} />
    </div>
  )
}