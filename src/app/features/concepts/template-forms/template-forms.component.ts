import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.css']
})
export class TemplateFormsComponent implements OnInit {

  model = {
    name: {
      firstName: '',
      lastName: ''
    },
    email: '',
    gender: ''
  }

  constructor() { }

  ngOnInit() {
  }

  // grouping fields, show custom error messages, add form validation
  
  onSubmit(form) {
    console.log(form);
    console.log(form.controls.firstName.valid);
    console.log('Form submitted successfully')
  }

}
