import Task from 'components/Task'
import { TaskType, TaskListType } from 'types'

const TaskList = (props: TaskListType) => {
    const toggleChecked = (index: number, checked: boolean): void => {
        props.toggleChecked(index, checked)
    }

    const onSubmitEdit = (index: number, text: string): void => {
        props.onSubmitEdit(index, text)
    }

    const clickDelete = (index: number): void => {
        props.clickDelete(index)
    }

    if (props.list.length === 0) {
        return <p>タスクはありません</p>
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
                            isChecked={task.isChecked}
                            toggleChecked={toggleChecked}
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
