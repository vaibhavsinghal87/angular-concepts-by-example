import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GithubUserService {

  private apiURL:string = 'https://api.github.com/users/';

  constructor(private http: HttpClient) { }

  getUserDetails(user: string) {
    let url = this.apiURL + user;
    this.http.get(url).subscribe(
      data => {
        console.log(data);
      }
    );
  }

}
