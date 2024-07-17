import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css'],
})
export class FormInputComponent implements OnInit {
  listItems: any[] = [];
  numOfList: any | number;
  todoForm: FormGroup = new FormGroup({
    inputName: new FormControl(null, [
      Validators.minLength(3),
      Validators.maxLength(15),
      Validators.required,
    ]),
  });
  constructor() {}

  ngOnInit(): void {
    let localStorageValue = localStorage.getItem('ItemsList');
    if (
      localStorageValue != '' &&
      localStorageValue != null &&
      typeof localStorageValue != 'undefined'
    ) {
      this.listItems = JSON.parse(localStorageValue);
      this.numOfList = this.listItems.length;
    } else {
      this.listItems = [];
    }
  }

  submitForm(todoForm: FormGroup) {
    console.log(todoForm.value);
    // let todoItem = Object.keys(todoForm.value)
    this.listItems.push(todoForm.value);
    this.numOfList = this.listItems.length;
    localStorage.setItem('ItemsList', JSON.stringify(this.listItems));
    todoForm.reset();
  }
  finishTask(e: Event) {
    let itemEle = document.querySelector('p') as HTMLParagraphElement;
    itemEle.classList.toggle('active');
  }
  deleteEl(index: number) {
    this.listItems.splice(index, 1);
    localStorage.setItem('ItemsList', JSON.stringify(this.listItems));
    this.numOfList = this.listItems.length;
  }
}
