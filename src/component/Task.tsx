import { useState } from 'react'
import styles from "./task.module.scss";

interface TaskType {
  index: number
  label: string
  onSubmitEdit: Function
  clickDelete: Function
}

const Task = (props: TaskType) => {
  const [isEditable, changeEditable] = useState<boolean>(false)

  const handleSubmitEdit = (e: any) => {
    e.preventDefault()
    const { task } = e.target.elements

    if(!task.value) return

    props.onSubmitEdit(props.index, task.value)
    changeEditable(false)
  }
  const handleClickDelete = (e: any) => {
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
