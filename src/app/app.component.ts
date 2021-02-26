import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 's00199608 - Quentin Quaile - to do';
  ThingsToDo = [
    'Learn JavaScript',
    'Learn Angular',
    'Learn Redux'
  ];
  thingsCompleted = [];

  summary():string {
    return `${this.ThingsToDo.length} to do / ${this.thingsCompleted.length} done`;
  }
  constructor(){
    setInterval(() => {
      this.ThingsToDo.push('make coffee');
    }, 1000);
  }
}
