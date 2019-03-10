import { Component, OnInit } from '@angular/core';
import { Task } from './components/item-list/item-list.component';
import { DataService } from './providers/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private dataSvc: DataService) {}

  ngOnInit() {}

  addItem(title: string) {
    this.dataSvc.addTask({
      title
    });
  }
}
