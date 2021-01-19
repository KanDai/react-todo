import Task from 'components/Task'
import { TaskType, TaskListType } from "types"

const TaskList = (props: TaskListType) => {
  const onSubmitEdit = (index: number, text: string): void => {
    props.onSubmitEdit(index, text)
  }

  const clickDelete = (index: number): void => {
    props.clickDelete(index)
  }

  if (props.list.length === 0) {
    return (
      <p>タスクはありません</p>
    )
  }

  return (
    <div className="TaskList">
      {props.list.map((task: TaskType, index: number) => {
          return (
              <div key={task.id} className="column is-3">
                  <Task
                    id={task.id}
                    index={index}
                    label={task.label}
                    onSubmitEdit={onSubmitEdit}
                    clickDelete={clickDelete}
                  />
              </div>
          )
      })}
    </div>
  )
}

export default TaskList
