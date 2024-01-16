import { CUSTOM_ELEMENTS_SCHEMA, Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule, NgFor, NgOptimizedImage } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CatCardComponent } from './cat-card/cat-card.component';
import { ProposalsComponent } from './proposals/proposals.component';
import { ProfileRowComponent } from './profile-row/profile-row.component';
import { FriendboxComponent } from './friendbox/friendbox.component';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, CatCardComponent, NgOptimizedImage, NgFor, ProposalsComponent, ProfileRowComponent, FriendboxComponent, MatIconModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  postTexts = [
    'Hallo, mein name ist Lisa :D Ich bin hier um Freunde zu treffen!',
    'Hallo zusammen. Freut mich dass ihr auch hier seid!',
    'Hey ich bin Timmi! Ich bin momentan 7 Monate alt und liebe Katzenmilch!',
    'Ich springe gerne!'
  ];

  postImages = [
    'assets/img/cats/cat1.jpg',
    'assets/img/cats/cat2.jpg',
    'assets/img/cats/cat3.jpg',
    'assets/img/cats/cat4.jpg'
  ];
}
