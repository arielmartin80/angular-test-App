import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hola-mundo',
  templateUrl: './hola-mundo.component.html',
  styleUrls: ['./hola-mundo.component.css']
})
export class HolaMundoComponent implements OnInit {

  title = 'Welcome to Angular'
  subtitle = 'This is a Test'
  image1 = "./assets/yo_pc.jpg"
  image2 = "./assets/calel.jpg"
  image3 = "./assets/yo.jpg"

  constructor() { }

  ngOnInit(): void {
  }

}
