import Todo from '../types/todo';

function TodoItem(todo: Todo) {
  return (
    <li className='mt-4 p-4 bg-white rounded-md shadow-md'>{todo.title}</li>
  );
}

export default TodoItem;
