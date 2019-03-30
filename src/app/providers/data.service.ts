import { Injectable } from '@angular/core';
import { Task } from '../components/item-list/item-list.component';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() {}

  async addTask(task: Task) {
    const tasks = this.getTasks();
    tasks.push(task);
    await localStorage.setItem('Tasks', JSON.stringify(tasks));
  }

  getTasks(): Task[] {
    return JSON.parse(localStorage.getItem('Tasks') || '[]');
  }

  async deleteTask(index: number, task: Task) {
    const tasks = this.getTasks();
    let opts = tasks.map((tsk, i) => {
      if (task.title === tsk.title && index === i) {
        tasks.splice(index, 1);
      }
    });

    await Promise.all(opts);
    return await localStorage.setItem('Tasks', JSON.stringify(tasks));
  }
}
