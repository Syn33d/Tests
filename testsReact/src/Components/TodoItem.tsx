import React from 'react';
import { Link } from 'react-router-dom';

function TodoItem({ task, removeTask }) {
    const getColor = (value) => {
        if (value < 8) return 'red';
        if (value < 10) return 'orange';
        if (value < 13) return 'yellow';
        return 'green';
    };

    const value = Number(task.note.split('/')[0]);

    return (
        <li style={{ backgroundColor: getColor(value) }}>
            <h2>{task.title}</h2>
            <p>{task.note}</p>
            <p>{task.comment}</p>
            <p>{task.date}</p>
            <button onClick={() => removeTask(task.index)}>Supprimer</button>
            <Link to={`/detail/${task.index}`}>Détails</Link>
        </li>
    );
}

export default TodoItem;
