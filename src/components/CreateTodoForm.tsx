import React, { FormEvent, useContext, useState } from 'react';
import TodoContext from '../TodoContext/TodoContext';
import Todo from '../types/todo';

const CreateTodoForm = () => {
  const [todo, setTodo] = useState('');
  const todoCtx = useContext(TodoContext);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newTodo = new Todo(todo);
    console.log(newTodo);
    todoCtx.addTodo(newTodo);
    setTodo('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='bg-green-500 text-black p-4 w-full'
    >
      <label className='block font-medium text-lg mb-2'>Todo</label>
      <input
        className='bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full leading-5'
        type='text'
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className='bg-black text-white py-2 px-4 rounded-lg mt-4'>
        Add Todo
      </button>
    </form>
  );
};

export default CreateTodoForm;
