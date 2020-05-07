import { Component } from '@angular/core';
import { AppConfigService } from './app-config.service';
import { UserData } from 'src/assets/models/userdata';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {}
}
