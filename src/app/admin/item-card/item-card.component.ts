import { Component, OnInit , EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.sass']
})
export class ItemCardComponent implements OnInit {
    @Input() item;
    @Output() addItem = new EventEmitter<boolean>();
    added = false;
  constructor() { }

  ngOnInit() {
  }

    addItems(){
        this.addItem.emit(true);
        this.added = true;
    }

}
