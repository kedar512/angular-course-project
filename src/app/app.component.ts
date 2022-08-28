import { Component } from '@angular/core';
import { RECIPE_TAB_NAME } from './common/app-constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tabName: string = RECIPE_TAB_NAME;

  onTabChange(tabName) {
    this.tabName = tabName;
  }
}
