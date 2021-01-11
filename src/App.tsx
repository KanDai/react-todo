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

  return (
    <div className="App">
      <InputForm onFormSubmit={crateTask} />
      <TaskList list={tasks} />
    </div>
  );
}

export default App
