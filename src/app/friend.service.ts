import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FriendService {
  names = [];
  texts = [];
  images = [];
  friends = [];

  constructor() { }

  addFriend(name, text, image){
    this.names.push(name);
    this.texts.push(text);
    this.images.push(image);
    this.friends.push({
      "name": name,
      "text": text,
      "image": image
    });
  }
}
