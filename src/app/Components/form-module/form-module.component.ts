import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-form-module',
  templateUrl: './form-module.component.html',
  styleUrls: ['./form-module.component.css']
})
export class FormModuleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  userLogin(data:any){
    console.log(data);
  }

  reactiveForm = new FormGroup({
    r_user: new FormControl('',[Validators.required,Validators.email]),
    r_password: new FormControl('',[Validators.required,Validators.minLength(5)])
  })

  get userValidator () { return this.reactiveForm.get('r_user') }
  get passwordValidator () { return this.reactiveForm.get('r_password') }

}
