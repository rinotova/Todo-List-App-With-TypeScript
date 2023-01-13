import { useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import Todo from '../types/todo';
import { TodoContextType, TodoProviderProps } from '../types/todoContext';
import TodoContext from './TodoContext';

const findTodoIndex = (todos: Todo[], todoId: string) => {
  return todos.findIndex((currentTodo) => currentTodo.id === todoId);
};

function TodosProvider({ children }: TodoProviderProps) {
  const [todoItems, setTodoItems] = useLocalStorage('todos', [] as Todo[]);
  const [editMode, setEditMode] = useState(false);
  const [todoInEditMode, setTodoInEditMode] = useState<Todo>();

  // Add Todo
  const addTodoHandler = (todo: Todo) => {
    setTodoItems((currentTodos) => currentTodos.concat(todo));
  };

  // Set edit mode handler
  const toggleEditMode = (isEditMode: boolean, todo?: Todo) => {
    setEditMode(isEditMode);
    setTodoInEditMode(todo || undefined);
  };

  // Remove Todo
  const removeTodoHandler = (todoId: string) => {
    let todosState = [...todoItems];
    const todoIndex = findTodoIndex(todosState, todoId);
    todosState.splice(todoIndex, 1);
    setTodoItems(todosState);
    setEditMode(false);
    setTodoInEditMode(undefined);
  };

  // Update Todo
  const updateTodoHandler = (todo: Todo) => {
    let todosState = [...todoItems];
    const todoIndex = findTodoIndex(todosState, todo.id);
    todosState[todoIndex] = todo;
    setTodoItems(todosState);
  };

  const todosContext: TodoContextType = {
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
    updateTodo: updateTodoHandler,
    todoItems: todoItems || [],
    toggleEditMode,
    editMode,
    todoInEditMode,
  };
  return (
    <TodoContext.Provider value={todosContext}>{children}</TodoContext.Provider>
  );
}

export default TodosProvider;
