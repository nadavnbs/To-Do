import { Injectable } from '@angular/core';

import { Todo } from './to-do';

@Injectable()
export class TodoService {
  pItems: Todo[] = []

  constructor() { }

  getTodosFromData(): Todo[] {
    return this.pItems;
  }
  addTodo(todo: Todo) {
    this.pItems.push(todo);
  }
  updateTodo(todo: Todo) {
    const index = this.pItems.map(x => x.id).indexOf(todo.id);
    this.pItems[index] = todo;
  }
  deleteTodo(todo: Todo) {
    this.pItems.splice(this.pItems.indexOf(todo), 1);
  }
}
