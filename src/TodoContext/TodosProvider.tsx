import { useReducer } from 'react';
import Todo from '../types/todo';
import { TodoContextType, TodoProviderProps } from '../types/todoContext';
import TodoContext from './TodoContext';

type TodoState = {
  todos: Todo[];
};

const todoReducer = (
  state: TodoState,
  action: { type: string; todo: Todo }
) => {
  let currentState = [...state.todos];

  if (action.type === 'GET') {
    return { todos: currentState };
  }
  if (action.type === 'ADD') {
    currentState.push(action.todo);
  }
  if (action.type === 'DELETE') {
    // code goes here
  }
  if (action.type === 'UPDATE') {
    // code goes here
  }
  return { todos: currentState };
};

function TodosProvider({ children }: TodoProviderProps) {
  const [todosState, dispatchTodoAction] = useReducer(todoReducer, {
    todos: [],
  });
  const addTodoHandler = (todo: Todo) => {
    dispatchTodoAction({
      type: 'ADD',
      todo,
    });
  };
  const todosContext: TodoContextType = {
    addTodo: addTodoHandler,
    removeTodo: () => {},
    updateTodo: () => {},
    todoItems: todosState.todos,
  };
  return (
    <TodoContext.Provider value={todosContext}>{children}</TodoContext.Provider>
  );
}

export default TodosProvider;
