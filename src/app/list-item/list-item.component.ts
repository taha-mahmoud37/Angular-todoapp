import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css'],
})
export class ListItemComponent implements OnInit {
  @Input() listOfItem: {}[] = [];
  numOfList: any = null;
  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    let currentItem: SimpleChange = changes?.['listOfItem']?.currentValue;
    this.listOfItem = currentItem.currentValue;
    console.log(currentItem);
  }
  ngOnInit(): void {}
}
