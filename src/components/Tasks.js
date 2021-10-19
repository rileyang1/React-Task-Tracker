import Task from './Task'

const Tasks = ({ tasksProp, onDelete, remind }) => {
    // Looping through each task from tasks which is passed into this component as a prop
    // Then passing each task as a prop to Task.js
    return (
        <>
          {tasksProp.map((task) => {
              return(
                <Task 
                key={task.id}
                taskProp={task}
                onDelete = {onDelete}
                remind = {remind}/>
                )
              }
          )}
        </>
    )
}

export default Tasks
