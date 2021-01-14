import { useState } from 'react'

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
      <div className="Task">
        <p>{props.label}</p>
        <button type="button" onClick={() => changeEditable(true)}>編集</button>
        <button type="button" onClick={handleClickDelete}>削除</button>
      </div>
    )
  } else {
    return (
      <div className="Task">
        <form onSubmit={handleSubmitEdit}>
          <input type="text" name="task" defaultValue={props.label} />
          <button type="submit">決定</button>
        </form>
      </div>
    )
  }
}

export default Task
