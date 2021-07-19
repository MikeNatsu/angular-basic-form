import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private showSidebar = false;
  private subject = new Subject<any>();

  constructor() {}

  toggleBarIcon() {
    this.showSidebar = !this.showSidebar;
    this.subject.next(this.showSidebar);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
