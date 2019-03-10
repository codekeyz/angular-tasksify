import { Injectable } from '@angular/core';
import { Task } from '../components/item-list/item-list.component';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() {}

  async addTask(task: Task) {
    const tasks: Task[] = this.getTasks();
    tasks.push(task);
    await localStorage.setItem('Tasks', JSON.stringify(tasks));
  }

  getTasks() {
    return JSON.parse(localStorage.getItem('Tasks') || '[]');
  }
}
