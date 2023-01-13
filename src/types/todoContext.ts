import { ReactNode } from 'react';
import Todo from './todo';

export type TodoContextType = {
  addTodo: (todo: Todo) => void;
  removeTodo: (todoId: string) => void;
  updateTodo: (todo: Todo) => void;
  todoItems: Todo[];
  toggleEditMode: (isEditMode: boolean, todo?: Todo) => void;
  editMode: boolean;
  todoInEditMode?: Todo;
};

export type TodoProviderProps = {
  children: ReactNode;
};
