import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Output() public sidenavToggle = new EventEmitter();
  public onToggleSidenav = () => {
    console.log('clicked');
    this.sidenavToggle.emit();
  }
  author = 'Tamas Piros';
  footer = `© ${new Date().getFullYear()}. Created by:&nbsp;<a href="https://twitter.com/tpiros">${this.author}<a>`;
}
