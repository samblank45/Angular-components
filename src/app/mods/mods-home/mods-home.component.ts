import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {
  showModal = false;
  items = [
    { title: "why is the sky blue?", content: "Because of air"},
    { title: "Where is Boston?", content: "Boston is in Massachusetts"},
    { title: "What color is the cat?", content: "the cat is orange color"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.showModal = !this.showModal
  }

}
