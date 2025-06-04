import { Component, inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-user-sidebar',
  standalone: false,
  templateUrl: './user-sidebar.html',
  styleUrl: './user-sidebar.css'
})
export class UserSidebar {

  // To control UI
  toggleMasterData = false;
  toggleForecastOverview = false;

  private router = inject(Router)

  ngOnInit(){
    this.router.events.pipe(filter(event => event instanceof NavigationEnd) )
    .subscribe((event : NavigationEnd)=>{
      // To Do : Jb kisi aur tab/route per click karte ha to , ye collepse kar jate ha
      //   this.toggleMasterData = event.url.includes("/masterdata")
      // this.toggleForecastOverview = event.url.includes("/forecast")
    })
  }
}
