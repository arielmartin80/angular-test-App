import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hola-mundo',
  templateUrl: './hola-mundo.component.html',
  styleUrls: ['./hola-mundo.component.css']
})
export class HolaMundoComponent implements OnInit {

  title = 'Welcome to Angular'
  subtitle = 'This is a Test'
  image = "./assets/yo_pc.png"
  image2 = "./assets/calel.jpg"

  constructor() { }

  ngOnInit(): void {
  }

}
