import { useState } from 'react'
import TaskList from './component/TaskList'
import InputForm from './component/InputForm';

function App() {
  const [id, setId] = useState<number>(0)
  const [tasks, setTasks] = useState<any>([])

  const crateTask = (label: string) => {
    setId(id + 1)

    const task = {
      id: id,
      label: label
    }

    setTasks([...tasks, task])
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
        clickDelete={deleteTask}
      />
    </div>
  );
}

export default App
