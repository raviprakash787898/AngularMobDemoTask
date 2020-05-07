import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { UserData } from 'src/assets/models/userdata';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {

  constructor(private http: HttpClient) {}

  getUserData() {
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this.http
      .get<UserData[]>('../assets/configs/userData.json', { headers })
      .pipe(map(r => r));
  }
}
