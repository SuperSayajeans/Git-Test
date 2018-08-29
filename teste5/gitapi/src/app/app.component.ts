import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  username: string;
  title = 'gitapi';
  payload$: Observable<Object>;
  payload: Object;

  constructor(private http: HttpClient) { }

  search() {
    const headerDict = {
      'Content-Type': 'application/json',
      'Authorization': `Token ${environment.token} `
    };

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };

    console.log(this.username);
    this.http.get(`https://api.github.com/users/${this.username}`, requestOptions)
    .subscribe((data1) => {
      this.payload = data1;
      this.http.get(`https://api.github.com/users/${this.username}/repos`, requestOptions)
      .subscribe((data2) => (this.payload.repos = data2) );
    });
  }
}
