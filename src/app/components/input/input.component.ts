import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Output() triggerAdd = new EventEmitter<string>();

  @Input() placeholder = '';

  @Input() clearInputAfterSent = false;

  value = '';

  constructor() {}

  ngOnInit() {}

  sendInput() {
    this.triggerAdd.emit(this.value);
    if (this.clearInputAfterSent) {
      this.value = '';
    }
  }
}
