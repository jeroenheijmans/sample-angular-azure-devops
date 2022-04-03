import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent {
  itemsData = new FormGroup({
    name: new FormControl(),
    petName: new FormControl(),
    favoriteColor: new FormControl(),
  });

  availableColors = [
    { name: 'red' },
    { name: 'green' },
    { name: 'blue' },
    { name: 'yellow' },
  ];

  constructor() { }


  onSubmit() {
    // not implemented yet
  }

}
