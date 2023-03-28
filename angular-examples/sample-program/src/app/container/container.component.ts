import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent {
  sendEmailLabel = 'Send Email';

  username = '';

  user = {
    firstName: 'Kundhana',
    lastName: 'Kola',
    profilePicUrl:
      'https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png',
    isActive: true,
  };

  sendEmail() {
    console.log('Hello');
    alert('Email sent!');
  }
}
