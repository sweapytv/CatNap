import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FriendService } from '../friend.service';

@Component({
  selector: 'app-profile-row',
  standalone: true,
  imports: [ NgIf ],
  templateUrl: './profile-row.component.html',
  styleUrl: './profile-row.component.scss'
})
export class ProfileRowComponent {
@Input() name = 'Maya';
@Input() img = 'assets/img/cats/cat6.jpg';
@Input() texts = '2 Jahre alt';
@Input() canFollow = true;

constructor(public fs: FriendService) { }
}
