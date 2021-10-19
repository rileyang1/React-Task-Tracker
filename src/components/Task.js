import { FaTimes } from 'react-icons/fa'

const Task = ({ taskProp, onDelete, remind }) => {
    // Output text of each task
    return (
        <div 
        className={`task ${taskProp.reminder === true ? 'reminder' : ''}`}
        onDoubleClick={()=>{remind(taskProp.id)}}>
            <h3>
                {taskProp.text}
                <FaTimes style={{
                    color: 'red',
                    cursor: 'pointer',
                }} onClick = {()=> onDelete(taskProp.id)}/>
            </h3>
            <p>{taskProp.day}</p>
        </div>
    )
}

export default Task
