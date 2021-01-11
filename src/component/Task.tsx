interface TaskType {
  index: number
  label: string
  clickDelete: Function
}

const Task = (props: TaskType) => {
  const handleClickDelete = (e: any) => {
    props.clickDelete(props.index)
  }
  return (
    <div className="Task">
      <p>{props.label}</p>
      <button type="button" onClick={handleClickDelete}>削除</button>
    </div>
  );
}

export default Task
