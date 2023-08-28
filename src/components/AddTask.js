import React from 'react'
import { useState } from 'react'

const AddTask = ({onAdd}) => {
    const [text, setText] = useState('');
    const [day, setDate] = useState('');
    const [reminder, setReminder] = useState(false);
    const onSubmit = (e)=>{
        e.preventDefault();

        if(!text){
            alert('Please add task!');
            return
        }

        onAdd({text, day, reminder})
        setText('');
        setDate('');
        setReminder(false);
    }

    return (
        <form className='form form--add' onSubmit={onSubmit}>
            <div className='form__controller'>
                <label className='form__label'>Task</label>
                <input className='form__input' type='text' placeholder='Add Task' value={text} onChange={(e)=>setText(e.target.value)}></input>
            </div>
            <div className='form__controller'>
                <label className='form__label'>Day & Time</label>
                <input className='form__input' type='text' placeholder='Add Day & Time' value={day} onChange={(e)=>setDate(e.target.value)}></input>
            </div>
            <div className='form__controller'>
                <label className='form__label--check'>Set Reminder</label>
                <input className='form__input--check' type='checkbox' checked={reminder} value={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)}></input>
            </div>
            <input className='btn btn--block' type='submit' value='Save Task'></input>
        </form>
    )
}

export default AddTask