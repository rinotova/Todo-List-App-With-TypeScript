import { useContext, useEffect, useState } from 'react';
import TodoContext from '../TodoContext/TodoContext';
import Todo from '../types/todo';
import CancelEditIcon from './CancelEditIcon';
import DeleteIcon from './DeleteIcon';
import EditIcon from './EditIcon';

function TodoItem(todo: Todo) {
  const todosCtx = useContext(TodoContext);
  const editModeTodoId = todosCtx.todoInEditMode?.id;
  const [isEditMode, setIsEditMode] = useState(false);
  const [isDone, setIsDone] = useState(todo.done);

  useEffect(() => {
    setIsEditMode(editModeTodoId === todo.id);
  }, [editModeTodoId]);

  const deleteTodoHandler = (todoId: string) => {
    todosCtx.removeTodo(todoId);
  };

  const editItemHandler = () => {
    todosCtx.toggleEditMode(true, todo);
  };

  const cancelEditItemHandler = () => {
    todosCtx.toggleEditMode(false);
  };

  const toggleTodoHandler = () => {
    todosCtx.updateTodo({...todo, done: !isDone});
    setIsDone((currentIsDone) => !currentIsDone);
  };

  const textStyle = `cursor-pointer flex-1 mr-3 ${isDone ? ' line-through' : ''}` ;

  return (
    <li className='flex justify-betwee mt-4 p-4 bg-white rounded-md shadow-md'>
      <div onClick={toggleTodoHandler} className={textStyle}>{todo.title}</div>
      <div className='flex items-center shrink-0 space-x-4'>
        {isEditMode ? (
          <button onClick={cancelEditItemHandler}>
            <CancelEditIcon />
          </button>
        ) : (
          <button onClick={editItemHandler}>
            <EditIcon />
          </button>
        )}
        <button onClick={deleteTodoHandler.bind(null, todo.id)}>
          <DeleteIcon />
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
