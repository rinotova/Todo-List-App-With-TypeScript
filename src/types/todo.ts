import uuid from 'react-uuid';

class Todo {
  id: string;
  title: string;
  done: boolean;

  constructor(todoTitle: string) {
    this.title = todoTitle;
    this.done = false;
    this.id = uuid();
  }
}

export default Todo;
