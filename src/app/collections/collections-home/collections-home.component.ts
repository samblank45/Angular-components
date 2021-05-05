import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {
  data = [
    {name: 'sam', age: 34, job: 'painter', employed: true},
    {name: 'jill', age: 25, job: 'engineer', employed: false},
    {name: 'john', age: 22, job: 'teacher', employed: true},
  ]

  headers = [
    { key: 'employed', label: 'has a job?' },
    { key: 'name', label: 'Name'},
    { key: 'age', label: 'Age'},
    { key: 'job', label: 'Job'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
