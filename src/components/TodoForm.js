import React, { useState } from 'react';

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      addTodo(value);
      setValue('');
    }
  };

  const handleChange = (e) => {
    if (e.target.value.length <= 80) {
      setValue(e.target.value);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <input
        type="text"
        value={value}
        onChange={handleChange}
        className="todo-input"
        placeholder="What is the task today?"
        maxLength={80} 
      />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
};
