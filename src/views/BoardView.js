import { useState } from 'react'
import Header from '../components/Header'
import Tasks from '../components/Tasks'
import AddTask from '../components/AddTask'

function BoardView() {

  const [showAddTask, setShowAddTask] = useState (false)

  const [tasks, setTasks] = useState(
    [
        {
            "id": 1,
            "text": "Doctors Appointment",
            "day": "Feb 5th at 2:30pm",
            "reminder": true
        },
        {
            "id": 2,
            "text": "Meeting at School",
            "day": "Feb 6th at 1:30pm",
            "reminder": true
        }
    ]
    
  )

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id , ...task }
    setTasks([...tasks, newTask])
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, reminder : !task.reminder } : task))
  }

  const name = 'Brad'
  const x = true;

  return (
    <div className="list">
      <Header onAdd={() => setShowAddTask(!showAddTask) } showAdd={showAddTask}  title='Task Tracker' />
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ?
      <Tasks onToggle={ toggleReminder } tasks={tasks} onDelete={deleteTask}/> : 'No Tasks to Show' }
    </div>
  );
}

export default BoardView;
