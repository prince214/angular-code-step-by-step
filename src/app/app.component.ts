import { Component } from '@angular/core';
import { UserDataServiceService } from './Services/user-data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-code-step-by-step';
  tempUsers = [
    {id:1,name:'Prince',email:'prince@gmail.com'},
    {id:2,name:'Harry',email:'harry@gmail.com'},
    {id:3,name:'cody',email:'cody@gmail.com'},
  ]
  userData:any
  userArr:any
  constructor(private userInfo: UserDataServiceService){
    userInfo.userService().subscribe((data) => {
      console.log(data);
      this.userArr = data
    })
  }

  submitFormData(data:any){
    console.log(data);
    this.userData = data
  }
}
