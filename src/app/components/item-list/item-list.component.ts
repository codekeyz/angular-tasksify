import { Component, OnInit } from '@angular/core';
import { Observable, interval, from, of } from 'rxjs';
import { startWith, switchMap, distinctUntilChanged } from 'rxjs/operators';
import { DataService } from 'src/app/providers/data.service';

export interface Task {
  title: string;
}

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  tasks$: Observable<Task[]>;

  checkedList = {};

  constructor(private dataSvc: DataService) {}

  ngOnInit() {
    // Create an observable of tasks that emits every 1sec
    this.tasks$ = interval(1000).pipe(
      startWith(0),
      switchMap(() => of(this.dataSvc.getTasks())),
      distinctUntilChanged((x, y) => {
        // Making sure that the new items are new before emitting
        return JSON.stringify(x) === JSON.stringify(y);
      })
    );
  }

  deleteItem(index: number, task: Task) {
    this.dataSvc.deleteTask(index, task);
  }

  itemChecked(index: number, item: Task) {
    this.checkedList[index] = item;
  }
}
