import React, { useState } from 'react';

function TodoItem({ task, removeTask }) {
  const getColor = (index) => {
    if (index < 8) return 'red';
    if (index < 10) return 'orange';
    if (index < 13) return 'yellow';
    return 'green';
  };

  return (
    <li style={{ color: getColor(task.index) }} onClick={() => removeTask(task.index)}>
      {task.text}
    </li>
  );
}