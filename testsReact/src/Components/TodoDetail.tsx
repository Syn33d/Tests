import React from 'react';
import { useParams } from 'react-router-dom';
import { useTaskStore } from '../Stores/task';

function TodoDetail() {
  const tasks = useTaskStore((state) => state.tasks);
  const { id } = useParams<{ id?: string }>();

  const task = tasks.find((task) => task.index === Number(id));

  return task ? (
    <div>
      <h2>{task.title}</h2>
      <p>{task.note}</p>
      <p>{task.comment}</p>
      <p>{task.date}</p>
    </div>
  ) : (
    <p>La note n'existe pas</p>
  );
}

export default TodoDetail;