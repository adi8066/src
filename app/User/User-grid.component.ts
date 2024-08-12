import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/User.Service.';

@Component({
  selector: 'app-user-grid',
  templateUrl: './user-grid.component.html',
  styleUrls: ['./user-grid.component.css']
})
export class UserGridComponent implements OnInit {
  users: any[] = []; // Array to hold user data
  error: string | null = null;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    // Replace with your logic to load multiple users if needed
    // For this example, assuming a single userId of 1
    const userId = 1;
    this.userService.getUserDetails(userId).subscribe(
      (data: any) => {
        this.users = [data]; // Wrap data in an array for display purposes
      },
      (error: any) => {
        this.error = 'Failed to load user details.';
        console.error(error);
      }
    );
  }
}
