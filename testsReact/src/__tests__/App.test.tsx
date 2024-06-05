import '@testing-library/jest-dom';

import { test, expect } from 'vitest';
import { fireEvent, render, screen, within } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { useTaskStore } from '../Stores/task';
import TodoList from '../Components/TodoList';
import { Provider } from 'react-redux'; // Import the Provider component from the 'react-redux' package
import TodoItem from '../Components/TodoItem';

test('user can type into input field', () => {
  render(<App />);

  const inputElement = screen.getByPlaceholderText('Titre');
  fireEvent.change(inputElement, { target: { value: 'Test Task' } });

  expect(inputElement).toHaveValue('Test Task');
});

test('note color is red when value is less than 8', () => {

  render(
      <TodoList />
  );

  // Act
  fireEvent.change(screen.getByPlaceholderText('Titre'), { target: { value: 'Test Task' } });
  fireEvent.change(screen.getByPlaceholderText('Note'), { target: { value: '5' } }); // note value less than 8
  fireEvent.change(screen.getByPlaceholderText('Commentaire'), { target: { value: 'Test Comment' } });
  fireEvent.submit(screen.getByRole('button'));

  const noteElement = screen.getByText('5');
  const style = window.getComputedStyle(noteElement);

  // Assert
  expect(style.color).toBe('rgb(255, 0, 0)'); // replace with the expected color
});

test('background color is red when note is less than 8', () => {
  const task = {
    title: 'Test Task',
    note: '5/10',
    comment: 'Test Comment',
    date: '2022-01-01',
    index: 1
  };

  render(
    <TodoItem task={task} removeTask={undefined} />
  );

  const liElement = screen.getByRole('listitem');
  const style = window.getComputedStyle(liElement);

  expect(style.backgroundColor).toBe('red');
});

test('user can delete a task after it has been created', () => {
  render(<App />);

  const inputElement = screen.getByPlaceholderText('Titre');
  const addButton = screen.getByRole('button');

  userEvent.type(inputElement, 'Test Task');
  userEvent.click(addButton);
  const listItem = screen.getByText('Test Task');
  expect(listItem).toBeInTheDocument();

  const deleteButton = within(listItem).getByRole('button');
  userEvent.click(deleteButton);

  expect(listItem).not.toBeInTheDocument();
});