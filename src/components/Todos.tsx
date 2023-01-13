import { useContext } from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import TodoContext from '../TodoContext/TodoContext';
import TodoItem from './TodoItem';

function Todos() {
  const [parent] = useAutoAnimate<any>(/* optional config */);
  const todosCtx = useContext(TodoContext);

  return (
    <ul className='list-none w-full' ref={parent}>
      {todosCtx.todoItems.map((todo) => {
        return <TodoItem {...todo} key={todo.id} />;
      })}
    </ul>
  );
}

export default Todos;
