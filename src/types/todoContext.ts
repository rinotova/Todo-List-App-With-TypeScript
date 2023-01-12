import { ReactNode } from 'react';
import Todo from './todo';

export type TodoContextType = {
  addTodo: (todo: Todo) => void;
  removeTodo: () => void;
  updateTodo: () => void;
  todoItems: Todo[];
};

export type TodoProviderProps = {
  children: ReactNode;
};
