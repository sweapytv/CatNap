import { Component, Input, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-cat-card',
  standalone: true,
  imports: [ MatIconModule ],
  templateUrl: './cat-card.component.html',
  styleUrl: './cat-card.component.scss'
})
export class CatCardComponent  implements OnInit  {
  @Input() text: string = '';
  @Input() catpics: string = '';

  constructor() { }

  ngOnInit(): void {
  }
}
