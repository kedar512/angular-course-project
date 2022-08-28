import { Component, EventEmitter, Output } from '@angular/core';
import { RECIPE_TAB_NAME } from '../common/app-constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  @Output() tabChangeEvent = new EventEmitter<string>();

  onTabChange(tabName) {
    this.tabChangeEvent.emit(tabName);
  }

}
