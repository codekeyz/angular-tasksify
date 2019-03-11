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

  constructor(private dataSvc: DataService) {}

  ngOnInit() {
    // Create an observable of tasks that emits every 5sec
    this.tasks$ = interval(5000).pipe(
      startWith(0),
      switchMap(() => of(this.dataSvc.getTasks())),
      distinctUntilChanged((x, y) => {
        // Making sure that the new items are new before emitting
        return JSON.stringify(x) === JSON.stringify(y);
      })
    );
  }
}
