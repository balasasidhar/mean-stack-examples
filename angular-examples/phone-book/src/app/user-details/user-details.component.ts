import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent {
  userDetails: any;
  isLoading = true;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private location: Location
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(this.getUserDetails.bind(this));
  }

  getUserDetails(query: any) {
    const { userId } = query;
    this.http
      .get(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .subscribe(this.handleResponse.bind(this));
  }

  handleResponse(response: any) {
    this.userDetails = response;
    this.isLoading = false;
  }

  deleteUserDetails() {
    const { id } = this.userDetails;
    this.http
      .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .subscribe(this.handleDeleteResponse.bind(this));
  }

  handleDeleteResponse() {
    this.userDetails = null;
    this.location.back();
  }
}
