import { Component, OnInit } from '@angular/core';
import { UserDataServiceService } from 'src/app/Services/user-data-service.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  userArr:any
  constructor(private userInfo: UserDataServiceService){
    userInfo.userService().subscribe((data) => {
      this.userArr = data
    })
  }

  ngOnInit(): void {
  }

}
