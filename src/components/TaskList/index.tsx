import Task from 'components/Task'
import { TaskType, TaskListType } from 'types'
import styles from './styles.module.scss'

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

    const deleteCompleteTask = (): void => {
        props.deleteCompleteTask()
    }

    if (props.list.length === 0) {
        return (
            <div className={styles.nodata}>
                <p>タスクはありません</p>
            </div>
        )
    }

    return (
        <div className={styles.list}>
            {props.list.map((task: TaskType, index: number) => {
                return (
                    <div key={task.id}>
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
            <div className={styles.deleteArea}>
                <button type="button" onClick={deleteCompleteTask}>
                    処理済みのタスクを削除
                </button>
            </div>
        </div>
    )
}

export default TaskList
