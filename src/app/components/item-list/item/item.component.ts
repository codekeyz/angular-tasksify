import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() title: string;

  checked = false;

  @Output() delete = new EventEmitter<any>();

  @Output() check = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  clicked() {
    this.checked = !this.checked;
    this.check.emit(this.checked);
  }

  clickDelete() {
    this.delete.emit();
  }
}
