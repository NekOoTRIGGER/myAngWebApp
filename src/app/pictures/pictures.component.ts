import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pictures',
  standalone: true,
  imports: [],
  templateUrl: './pictures.component.html',
  styleUrl: './pictures.component.css'
})

export class PicturesComponent {
  toDos: string = "yoyoyoyo";

  getString(): void {
    alert(this.toDos) 
  }
}