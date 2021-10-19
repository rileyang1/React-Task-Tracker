import { useState } from 'react';
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

const App = () => {
  // useState to show addTask component based on add button
 const [showAddTask, setShowAddTask] = useState(false) 

  // useState to change state of tasks based on various functions like add, delete, toggle reminder
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Code 2006 SWE Project',
      day: 'Oct 19th at 1:30pm',
      reminder: true, 
    },
    {
      id: 2,
      text: 'Jane Street VETC',
      day: 'Oct 23rd at 10:00am',
      reminder: true, 
    },
    {
      id: 3,
      text: 'Internship Applications',
      day: 'Oct 25th at 11:30pm',
      reminder: false, 
    },
  ])

  // Delete function
  const deleteTask = (id) => {
    setTasks(tasks.filter((task)=> task.id !== id))
  }

  // Toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => {
      if (task.id === id){
        task.reminder = !task.reminder 
      }
      return task
    }))
  }

  // Submit form
const addTask = (task) => {
  const id = Math.floor(Math.random() * 1000 + 1)

  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
}

  return(
    <div className = 'container'>
      <Header 
      title = "Task Tracker"
      onAdd = {()=> setShowAddTask(!showAddTask)}
      showAdd = {showAddTask}/>
      {showAddTask && <AddTask onAdd = {addTask}/>}
      { // put in {} for js scripts, if tasks != empty, show tasks, else display message
      tasks.length > 0 ? (<Tasks tasksProp={tasks} onDelete={deleteTask} remind={toggleReminder}/>)
      : ("No tasks to show")}
    </div>
  )
}

export default App;
