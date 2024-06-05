import React, { useState } from 'react';
import TodoItem from './TodoItem';
import { useTaskStore } from '../Stores/task';

function TodoList() {
    const addTask = useTaskStore((state) => state.addTask);
    const removeTask = useTaskStore((state) => state.removeTask);
    const tasks = useTaskStore((state) => state.tasks);
    const [newTask, setNewTask] = useState({ title: '', note: '', comment: '', date: '' });
  
    const handleAddTask = (event: React.FormEvent) => {
        event.preventDefault(); // Prevent form submission from reloading the page
        const task = { ...newTask, index: tasks.length, date: new Date().toLocaleDateString() };
        addTask(task);
        setNewTask({ title: '', note: '', comment: '', date: '' });
      };
  
    const handleChange = (e) => {
      setNewTask({ ...newTask, [e.target.name]: e.target.value });
    };

    return (
        <div>
            {/* Render your tasks here */}
            {tasks.map((task) => (
                <TodoItem key={task.index} task={task} removeTask={removeTask} />
            ))}
            {/* Form for adding a new task */}
            <form onSubmit={handleAddTask}>
                {/* Inputs for title, note, and comment with placeholders */}
                <input
                    name="title"
                    value={newTask.title}
                    onChange={handleChange}
                    placeholder="Titre"
                />
                <input
                    name="note"
                    value={newTask.note}
                    onChange={handleChange}
                    placeholder="Note"
                />
                <input
                    name="comment"
                    value={newTask.comment}
                    onChange={handleChange}
                    placeholder="Commentaire"
                />
                <button type="submit">Add Task</button>
            </form>
        </div>
    );
}

export default TodoList;
