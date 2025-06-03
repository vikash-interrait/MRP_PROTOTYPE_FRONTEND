import { Component } from '@angular/core';

@Component({
  selector: 'app-user-sidebar',
  standalone: false,
  templateUrl: './user-sidebar.html',
  styleUrl: './user-sidebar.css'
})
export class UserSidebar {

  toggleMaster = false;
  toggleForecast = false;
}
