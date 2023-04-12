import { Location } from '@angular/common';

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/services/user.service';

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
    private userService: UserService,
    private location: Location
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((query) => {
      const { userId } = query;
      this.userService.getUserDetails(userId).subscribe((resp) => {
        this.userDetails = resp;
        this.isLoading = false;
      });
    });
  }

  deleteUserDetails() {
    this.userService
      .deleteUserDetails(this.userDetails.id)
      .subscribe((data) => {
        console.log(data);
        this.location.back();
      });
  }
}
