import { useState } from 'react'

const AddTask = ({ onAdd }) => {


    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text){
            alert('Please add a task')
            return
        }

        onAdd({text, day, reminder})

        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input value={text} onChange={(e) => setText(e.target.value)} type='text' placeholder="Add Task"></input>
            </div>
            <div className='form-control form-control-check'>
                <label>Day and Time</label>
                <input value={day} onChange={(e) => setDay(e.target.value)} type='text' placeholder="Add Day and Time"></input>
            </div>
            <div className='form-control'>
                <label>Set Reminder</label>
                <input checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} type='checkbox'></input>
            </div>
            <input type="submit" className="btn btn-block" value="Save Task" />
        </form>



    )
}

export default AddTask