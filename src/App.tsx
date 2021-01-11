import React from 'react'
import Task from './component/Task'

function App() {
  const tasks = [
    {
      id: 1,
      label: 'テスト'
    },
    {
      id: 2,
      label: 'テスト2'
    }
  ]

  return (
    <div className="App">
      {tasks.map((task) => {
          return (
              <div key={task.id} className="column is-3">
                  <Task label={task.label} />
              </div>
          )
      })}
    </div>
  );
}

export default App
