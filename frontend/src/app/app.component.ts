import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  production = environment.production;
  name = environment.name;

  routerSubscription: Subscription;

  isCreate = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.routerSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isCreate = this.hasRoute('/create');
      }
    });
  }

  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }

  hasRoute(router: string) {
    return router === this.router.url;
  }
}
