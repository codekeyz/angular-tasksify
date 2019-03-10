import { Component, OnInit } from '@angular/core';
import { Task } from './components/item-list/item-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  tasks: Task[] = [];

  ngOnInit() {}

  addItem(title: string) {
    this.tasks.push({
      title
    });
  }
}
