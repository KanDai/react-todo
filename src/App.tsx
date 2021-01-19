import { useState } from 'react'
import TaskList from 'components/TaskList'
import InputForm from 'components/InputForm'

interface TaskType {
    id: number
    label: string
    isChecked: boolean
}

function App() {
    const [id, setId] = useState<number>(0)
    const [tasks, setTasks] = useState<TaskType[]>([])

    const crateTask = (label: string): void => {
        setId(id + 1)

        const task: TaskType = {
            id: id,
            label: label,
            isChecked: false,
        }

        setTasks([...tasks, task])
    }

    const editTask = (index: number, text: string): void => {
        tasks[index].label = text

        setTasks([...tasks])
    }

    const deleteTask = (index: number): void => {
        tasks.splice(index, 1)

        setTasks([...tasks])
    }

    const toggleChecked = (index: number, checked: boolean): void => {
        tasks[index].isChecked = checked

        setTasks([...tasks])
    }

    return (
        <div className="App">
            <InputForm onFormSubmit={crateTask} />
            <TaskList
                list={tasks}
                toggleChecked={toggleChecked}
                onSubmitEdit={editTask}
                clickDelete={deleteTask}
            />
        </div>
    )
}

export default App
