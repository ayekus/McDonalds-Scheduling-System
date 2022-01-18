import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  constructor() {}

  userProfile: any;

  ngOnInit(): void {
    const userInfo: any = localStorage.getItem('userProfile');
    this.userProfile = JSON.parse(userInfo);

    console.log(this.userProfile);
  }
}
