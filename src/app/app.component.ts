import { Component, NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
  @NgModule({
    imports: [MatSidenavModule],
})
export class AppComponent {
  title = 'ng-planpoker';
}
