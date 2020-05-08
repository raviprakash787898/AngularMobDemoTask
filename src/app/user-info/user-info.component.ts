import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd} from "@angular/router";
import { AppConfigService } from '../app-config.service';
import { UserData } from 'src/assets/models/userdata';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  id: any;
  userData: UserData[];
  curretUserData: any;
  userObj: any = [];
  selectedTab: any = 'search';
  mySubscription: any;
  
  constructor(private route: ActivatedRoute,
    private router: Router,
    private appConfigService: AppConfigService) {

    this.route.params.subscribe( params => {
     this.id = params['id'];
     console.log("Current Id : ",this.id);
    });

    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    this.mySubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.router.navigated = false;
      }
    });
  }

  ngOnInit() {
    this.appConfigService.getUserData().subscribe((res: UserData[]) => {
      this.userData = res;
      if(this.userData.length){
        this.userObj = Object.keys(this.userData[0]);
        this.curretUserData = this.userData.filter(item => {
          return item.id === parseInt(this.id);
        });
      }
    });
  }

  showUser(user: UserData){
    this.router.navigate(['userinfo', user.id]);
  }
  
  ngOnDestroy() {
  if (this.mySubscription) {
    this.mySubscription.unsubscribe();
  }
}
}
