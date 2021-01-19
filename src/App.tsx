import { useState } from 'react'
import TaskList from 'components/TaskList'
import InputForm from 'components/InputForm'

interface TaskType {
    id: number
    label: string
}

function App() {
    const [id, setId] = useState<number>(0)
    const [tasks, setTasks] = useState<TaskType[]>([])

    const crateTask = (label: string) => {
        setId(id + 1)

        const task: TaskType = {
            id: id,
            label: label,
        }

        setTasks([...tasks, task])
    }

    const editTask = (index: number, text: string) => {
        tasks[index].label = text

        setTasks([...tasks])
    }

    const deleteTask = (index: number) => {
        tasks.splice(index, 1)

        setTasks([...tasks])
    }

    return (
        <div className="App">
            <InputForm onFormSubmit={crateTask} />
            <TaskList
                list={tasks}
                onSubmitEdit={editTask}
                clickDelete={deleteTask}
            />
        </div>
    )
}

export default App
