import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  title: string = 'Basic Form';
  showSideBar: boolean = false;
  faArrowLeft = faArrowLeft;
  faBars = faBars;
  subscription: Subscription;

  constructor(private uiService: UiService, private router: Router) {
    this.subscription = this.uiService.onToggle().subscribe((value) => {
      this.showSideBar = value;
    });
  }

  ngOnInit(): void {}
  barsOnToggle(): void {
    this.uiService.toggleBarIcon();
  }


  hasRoute(route: string) {
    return this.router.url === route;
  }
}
