import { useState } from 'react'
import TaskList from 'components/TaskList'
import InputForm from 'components/InputForm'

interface TaskType {
    id: number
    label: string
    isChecked: boolean
}

function App() {
    const savedId = localStorage.getItem('reactTodoAppId')
        ? Number(localStorage.getItem('reactTodoAppId'))
        : 0
    const tempSavedTasks = localStorage.getItem('reactTodoAppTasks')
    const savedTasks = tempSavedTasks ? JSON.parse(tempSavedTasks) : []
    const [id, setId] = useState<number>(savedId)
    const [tasks, setTasks] = useState<TaskType[]>(savedTasks)

    const saveTasks = (tasks: TaskType[]): void => {
        setTasks([...tasks])
        localStorage.setItem('reactTodoAppTasks', JSON.stringify(tasks))
    }

    const crateTask = (label: string): void => {
        const task: TaskType = {
            id: id,
            label: label,
            isChecked: false,
        }

        const margedTasks = [...tasks, task]
        saveTasks(margedTasks)

        const newId = id + 1
        setId(newId)
        localStorage.setItem('reactTodoAppId', String(newId))
    }

    const editTask = (index: number, text: string): void => {
        tasks[index].label = text

        saveTasks(tasks)
    }

    const deleteTask = (index: number): void => {
        tasks.splice(index, 1)

        saveTasks(tasks)
    }

    const deleteCompleteTask = (): void => {
        const filterdTasks = tasks.filter((task) => !task.isChecked)

        saveTasks(filterdTasks)
    }

    const toggleChecked = (index: number, checked: boolean): void => {
        tasks[index].isChecked = checked

        saveTasks(tasks)
    }

    return (
        <div className="App">
            <InputForm onFormSubmit={crateTask} />
            <TaskList
                list={tasks}
                toggleChecked={toggleChecked}
                onSubmitEdit={editTask}
                clickDelete={deleteTask}
                deleteCompleteTask={deleteCompleteTask}
            />
        </div>
    )
}

export default App
