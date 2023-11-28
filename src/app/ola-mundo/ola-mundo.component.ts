import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ola-mundo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ola-mundo.component.html',
  styleUrl: './ola-mundo.component.css'
})
export class OlaMundoComponent {

  constructor() { }

 ngOnInit() {
 }
}
