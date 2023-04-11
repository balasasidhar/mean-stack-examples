import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  users: any = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getUsers();
  }

  handleServerResponse(response: any) {
    this.users = response;
  }

  getUsers() {
    this.http
      .get('https://jsonplaceholder.typicode.com/users')
      .subscribe(this.handleServerResponse.bind(this));
  }

  saveUser() {
    this.http.post('https://jsonplaceholder.typicode.com/users', {
      name: 'test nme',
      username: 'testname',
      phone: 1234567,
      email: 'test@example.com',
    });
  }

  updateUser() {
    const userId = 1;
    this.http.put(`https://jsonplaceholder.typicode.com/users/${userId}`, {
      name: 'test nme',
      username: 'testname',
      phone: 1234567,
      email: 'test@example.com',
    });
  }
}
