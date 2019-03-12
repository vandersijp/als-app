import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'als-app';
  // see https://gist.github.com/jeffwhelpley/2d14a615790af18b3549
  constructor(private window: Window) { };
}
