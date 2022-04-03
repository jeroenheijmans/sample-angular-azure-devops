import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
})
export class ItemsComponent {
  itemsData = new FormGroup({
    name: new FormControl('', [Validators.required]),
    petName: new FormControl('', [Validators.required]),
    favoriteColor: new FormControl(),
  });

  availableColors = [
    { name: 'red' },
    { name: 'green' },
    { name: 'blue' },
    { name: 'yellow' },
  ];

  constructor() {}

  onSubmit() {
    // not implemented yet
  }
}
