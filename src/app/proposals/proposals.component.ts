import { Component } from '@angular/core';
import { ProfileRowComponent } from '../profile-row/profile-row.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-proposals',
  standalone: true,
  imports: [ProfileRowComponent, NgFor],
  templateUrl: './proposals.component.html',
  styleUrl: './proposals.component.scss'
})
export class ProposalsComponent {
  names = ['Marius', 'Jose'];
  texts = ['Mag es Mäuse zu fangen', 'Hat immer Hunger'];
  images = ['assets/img/cats/cat4.jpg', 'assets/img/cats/cat5.jpg', 'assets/img/cats/cat6.jpg', 'assets/img/cats/cat7.jpg'];

}
