import styles from './TaskHeader.module.css'

interface TaskHeaderProps {
  tasksCreated: number;
  tasksCompleted: number;
}

export function TaskHeader({ tasksCreated, tasksCompleted }: TaskHeaderProps) {
  return (
    <div className={styles.header}>
      <div className={styles.created}>
        <p className={styles.createdText}>Created tasks</p>
        <button className={styles.createdButton}>{tasksCreated}</button>
      </div>
      <div className={styles.finished}>
        <p className={styles.finishedText}>Finished</p>
        <button className={styles.finishedButton}>{tasksCompleted} of {tasksCreated}</button>
      </div>
    </div>
  )
}