import { Component, OnInit } from '@angular/core';
import { UserData } from 'src/assets/models/userdata';
import { AppConfigService } from '../app-config.service';
import { Router } from '@angular/router';

@Component({
  selector: 'home-app',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    userData: UserData[] = [];
    userObj: any = [];
    constructor(private appConfigService: AppConfigService,
      private route: Router) {}
  
    ngOnInit() {
      this.appConfigService.getUserData().subscribe((res: UserData[]) => {
        this.userData = res;
        this.userObj = Object.keys(this.userData[0]);
        console.log("Data obj : ",this.userObj);
        console.log("Data : ",res);
      });
    }
  
    showUserData(data: any){
      console.log("User clicked Data : ",data);
      this.route.navigate(['userinfo', data.id]);
    }

}
