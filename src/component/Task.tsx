import { useState } from 'react'
import styles from "./task.module.scss"
import { TaskType } from "./Task.d"

const Task = (props: TaskType) => {
  const [isEditable, changeEditable] = useState<boolean>(false)

  const handleSubmitEdit = (e: any): void => {
    e.preventDefault()
    const { task } = e.target.elements

    if(!task.value || !props.onSubmitEdit) return

    props.onSubmitEdit(props.index, task.value)
    changeEditable(false)
  }
  const handleClickDelete = (): void => {
    if(!props.clickDelete) return
    props.clickDelete(props.index)
  }

  if (!isEditable) {
    return (
      <div className={styles.wrap}>
        <p>{props.label}</p>
        <div className={styles.btns}>
          <button
            type="button"
            className={styles.btn}
            onClick={() => changeEditable(true)}
          >
            編集
          </button>
          <button
            type="button"
            className={styles.btn}
            onClick={handleClickDelete}
          >
            削除
          </button>
        </div>
      </div>
    )
  } else {
    return (
      <div className={styles.wrap}>
        <form
          className={styles.form}
          onSubmit={handleSubmitEdit}
        >
          <input
            type="text"
            name="task"
            className={styles.formInput}
            defaultValue={props.label}
          />
          <button
            className={styles.formBtn}
            type="submit"
          >
            決定
          </button>
        </form>
      </div>
    )
  }
}

export default Task
