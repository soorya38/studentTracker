import { useState } from "react";

const Todo = () => {
    const [tasks, setTasks] = useState([]);
    const [value, setValue] = useState('');

    const handleAddTaskClick = () => {
        setTasks([...tasks, value]);
        setValue('');
    }

    const handleInput = (event) => {
        setValue(event.target.value);
    }

    const handleDelete = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    }

    return (
        <div className="outer-todo-container">
            <div className="todo-container">
                <input type='text' value={value} onChange={handleInput} />
                <button onClick={handleAddTaskClick}>Add</button>
                <ul className='todo-list'>
                    {tasks.map((task, index) => (
                        <li className="todo-list-item" key={index}>
                            {task}
                            <button 
                                style={{marginLeft: '10px'}} 
                                onClick={() => handleDelete(index)}
                                className='todo-list-item-btn'
                            >del</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Todo;
