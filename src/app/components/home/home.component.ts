import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  applications = [];
  constructor(private router : Router) { }

  ngOnInit(): void {
    this.applications = [
      {name: 'app1', icon: 'https://picsum.photos/20/20'},
      {name: 'app2', icon: 'https://picsum.photos/20/20'},
      {name: 'app3', icon: 'https://picsum.photos/20/20'},
      {name: 'app4', icon: 'https://picsum.photos/20/20'},
      {name: 'app5', icon: 'https://picsum.photos/20/20'}
    ]
  }

  navigateUrl(app) {
    this.router.navigateByUrl('/landing/'+app.name);
  }

}
