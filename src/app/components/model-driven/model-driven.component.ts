import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-model-driven',
  templateUrl: './model-driven.component.html',
  styleUrls: ['./model-driven.component.css']
})
export class ModelDrivenComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void { }

  userDetails = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.formBuilder.group({
      landMark: [''],
      state: [''],
      city: [''],
      pincode: ['']
    }),
    languagesKnown: this.formBuilder.array([
      this.formBuilder.control('')
    ])
  });
  get languagesKnown() {
    return this.userDetails.get('languagesKnown') as FormArray;
  }
  updateValues() {
    this.userDetails.patchValue({
      firstName: 'Rohit',
      address: {
        landMark: 'Near my house'
      }
    })
  }
  addLang() {
    this.languagesKnown.push(this.formBuilder.control(''));
  }
  onSubmit() {
    console.log(this.userDetails.value);
  }
}