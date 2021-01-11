import Task from './Task'

interface TaskType {
  id: number
  label: string
}

const TaskList = (props: any) => {
  if (props.list.length === 0) {
    return (
      <p>タスクはありません</p>
    )
  }

  return (
    <div className="TaskList">
      {props.list.map((task: TaskType) => {
          return (
              <div key={task.id} className="column is-3">
                  <Task label={task.label} />
              </div>
          )
      })}
    </div>
  );
}

export default TaskList
