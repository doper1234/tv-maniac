import { Component } from '@angular/core';

interface MenuItem {
  label: string;
  path: string;
  exact?: boolean;
  class: string;
}

@Component({
  selector: 'tm-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  menu: MenuItem[] = [
    {label: 'Home', path: '', exact: true, class: 'fa fa-home'},
    {label: 'TV Shows', path: 'tv', class: 'fa fa-tv'},
    {label: 'Settings', path: 'settings', class: 'fa fa-cog'},
    {label: 'Contact', path: 'contact', class: 'fa fa-phone'},
  ];

}
