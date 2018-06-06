import {Component, OnInit} from '@angular/core';
import {NavigationEnd, NavigationError, NavigationStart, Router} from '@angular/router';

@Component({
  selector: 'tm-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  pending = false;

  constructor(private router: Router) {
    this.router.events
      .subscribe(event => {
      if (event instanceof NavigationStart) {
        this.pending = true;
      }
      if (event instanceof NavigationEnd || event instanceof  NavigationError) {
        this.pending = false;
      }
    });
  }

  ngOnInit() {
  }

}
