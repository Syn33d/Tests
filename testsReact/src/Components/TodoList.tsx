import React, { useState } from 'react';

function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const addTask = (text) => {
        const task = { text, index: tasks.length };
        setTasks([...tasks, task]);
    };

    const removeTask = (index) => {
        setTasks(tasks.filter((task) => task.index !== index));
    };

    return (
        <>
            <div>
                <input value={newTask} onChange={(e) => setNewTask(e.target.value)} />
                <button onClick={() => addTask(newTask)}>Ajouter</button>
                <ul>
                    {tasks.map((task) => (
                        <TodoItem key={task.index} task={task} removeTask={removeTask} />
                    ))}
                </ul>
            </div>
        </>
    );
}

export default TodoList;