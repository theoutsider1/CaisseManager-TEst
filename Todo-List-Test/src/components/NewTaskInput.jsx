import { useState } from "react";

const NewTaskInput = ({ onAddTask }) => { // Properly destructure props
    const [taskTitle, setTaskTitle] = useState('');

    const handleChange = (event) => {
        setTaskTitle(event.target.value);
    };

    const handleSubmit = () => {
        if (taskTitle.trim() !== '') {
            onAddTask(taskTitle);
            setTaskTitle('');
        }
    };
    return (
        <div className="mb-6 ">
            <div className='p-4'>
                <input
                    type='text'
                    value={taskTitle}
                    onChange={handleChange}
                    placeholder='Enter task title'
                    className='border border-gray-400 p-2 rounded-md mr-2'
                />
                <button onClick={handleSubmit} className='bg-indigo-600 text-white py-2 px-4 rounded-md'>
                    Add Task
                </button>
            </div>
        </div>
    )
}

export default NewTaskInput;