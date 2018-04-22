import { Component, OnInit } from '@angular/core';
import { GithubUserService } from './github-user.service';

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.css'],
  providers: [GithubUserService]
})
export class HttpClientComponent implements OnInit {

  constructor(private userService: GithubUserService) { }

  user: string;
  userDetails: any;

  ngOnInit() {
  }

  getUserDetails(){
    console.log(this.user);
    this.userDetails = this.userService.getUserDetails(this.user);
  }

}
