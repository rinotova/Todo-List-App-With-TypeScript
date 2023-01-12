import { useContext } from 'react';
import TodoContext from '../TodoContext/TodoContext';
import TodoItem from './TodoItem';

function Todos() {
  const todosCtx = useContext(TodoContext);

  return (
    <ul className='list-none w-full'>
      {todosCtx.todoItems.map((todo) => {
        return <TodoItem {...todo} key={todo.id} />;
      })}
    </ul>
  );
}

export default Todos;
