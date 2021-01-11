interface TaskType {
  label: String
}

const Task = (props: TaskType) => {
  return (
    <div className="Task">
      <p>{props.label}</p>
    </div>
  );
}

export default Task
