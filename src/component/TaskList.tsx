import Task from './Task'

interface TaskType {
  id: number
  label: string
}

const TaskList = (props: any) => {
  const onSubmitEdit = (index: number, text: string) => {
    props.onSubmitEdit(index, text)
  }

  const clickDelete = (index: number) => {
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
                    index={index}
                    label={task.label}
                    onSubmitEdit={onSubmitEdit}
                    clickDelete={clickDelete}
                  />
              </div>
          )
      })}
    </div>
  );
}

export default TaskList
