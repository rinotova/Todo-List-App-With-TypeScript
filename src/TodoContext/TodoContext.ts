import { createContext } from 'react';
import { TodoContextType } from '../types/todoContext';

const TodoContext = createContext({} as TodoContextType);

export default TodoContext;
