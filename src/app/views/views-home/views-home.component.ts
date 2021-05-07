import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent implements OnInit {
  stats = [
    { value: 22, label: '# of Users'},
    { value: 900, label: 'Revenue'},
    { value: 50, label: 'Reviews'}
  ]

  items = [
    { image: '/assets/images/couch.jpeg', title: 'couch', description: 'this is an amazing couch to sit on'},
    { image: '/assets/images/dresser.jpeg', title: 'dresser', description: 'this is a great dresser to put stuff in'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
