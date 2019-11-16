import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'qj-web';

  onActivate(e) {
    if ((e.constructor.name) !== 'HomeComponent') {
      // console.log(window.pageYOffset);
      let temp = window.pageYOffset;
      window.scroll(0, 0);
    }
  }
}
