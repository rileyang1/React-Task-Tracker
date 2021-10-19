import { useState } from 'react'

const AddTask = ({ onAdd }) => {

    // onSubmit function
    const onSubmit = (e) => {
        e.preventDefault() // so the form does not actually submit to a page
        
        // form validation
        if (!text && !day) {
            alert("You can't submit a blank form!")
            return
        }
        else if (!text) {
            alert('Please add task!')
            return
        }

        onAdd({text, day, reminder})

        // clear fields and change back to default
        setText('')
        setDay('')
        setReminder(true)
    }
    // Use State
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(true)

    return (
        <form className='add-form' onSubmit = {onSubmit}>
            <div className='form-control'>
                <label>Tasks</label>
                <input type='text' placeholder='Add Task'
                value={text}
                onChange={(e)=>setText(e.target.value)}/>
            </div>

            <div className='form-control'>
                <label>Day & Time</label>
                <input type='text' placeholder='Add Time'
                value={day}
                onChange={(e)=>setDay(e.target.value)}/>
            </div>

            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input 
                type='checkbox'
                checked={reminder}
                value={reminder}
                onChange = {(e)=>{
                    setReminder(e.currentTarget.checked)
                }}
                />
            </div>

            <input className='btn btn-block' 
            type='submit' value='Save Task' />
        </form>
    )
}

export default AddTask
