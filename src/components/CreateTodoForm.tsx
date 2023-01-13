import React, {
  FormEvent,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import TodoContext from '../TodoContext/TodoContext';
import Todo from '../types/todo';

const CreateTodoForm = () => {
  const todoCtx = useContext(TodoContext);
  const todoInputRef = useRef<HTMLInputElement>(null);
  const editModeTodoId = todoCtx.todoInEditMode?.id;
  const isEditMode = todoCtx.editMode;
  const [todo, setTodo] = useState('');

  useEffect(() => {
    setTodo(todoCtx.todoInEditMode?.title || '');
    if (editModeTodoId) {
      todoInputRef.current?.focus();
    }
  }, [editModeTodoId]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (todo.length < 3) {
      return;
    }
    if (isEditMode) {
      todoCtx.updateTodo({ ...todoCtx.todoInEditMode, title: todo } as Todo);
      todoCtx.toggleEditMode(false);
    } else {
      const newTodo = new Todo(todo);
      todoCtx.addTodo(newTodo);
    }

    setTodo('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='bg-green-500 text-black p-4 w-full'
    >
      <label className='block font-medium text-lg mb-2'>Todo</label>
      <input
        ref={todoInputRef}
        className='bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full leading-5'
        type='text'
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className='bg-black text-white py-2 px-4 rounded-lg mt-4'>
        {isEditMode ? 'Edit Todo' : 'Add Todo'}
      </button>
    </form>
  );
};

export default CreateTodoForm;
