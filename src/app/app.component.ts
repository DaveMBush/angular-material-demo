import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // tslint:disable-next-line:typedef
  title = 'app';
  constructor(
    private router: Router) { }
  goToList(): void {
    this.router.navigate(['/list']);
  }

  get showButton(): boolean {
    return this.router.url.indexOf('list') < 0;
  }
}
