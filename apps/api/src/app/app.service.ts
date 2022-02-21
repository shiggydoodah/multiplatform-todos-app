import { Injectable } from '@nestjs/common';

interface Todo {
  id: number;
  text: string;
  done: boolean;
}

@Injectable()
export class AppService {
  private todos: Todo[] = [];

  getData(): Todo[] {
    return this.todos;
  }

  addTodo(text: string): void {
    this.todos.push({
      id: this.todos.length + 1,
      text,
      done: false,
    });
  }

  setDone(id: number, done: boolean): void {
    this.todos = this.todos.map(todo => ({
      ...todo,
      done: todo.id === id ? done : todo.done,
    }));
  }
  
}
