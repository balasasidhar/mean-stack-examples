import { Component } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'phone-book';

  observable = new Observable((publisher) => {
    // publish our data....
    try {
      setTimeout(() => publisher.next(1), 1000); // chunk 1
      setTimeout(() => publisher.next(2), 2000); // chunk 2
      setTimeout(() => publisher.next(3), 3000); // chunk 3
      setTimeout(() => publisher.next(4), 4000); // chunk 4
      setTimeout(() => publisher.next(5), 5000); // chunk 5
    } catch (error) {
      publisher.error(error);
    } finally {
      setTimeout(() => publisher.complete(), 1000 * 5);
    }
  });

  isLogged = new BehaviorSubject<boolean>(true);

  ngOnInit() {
    this.observable.subscribe((data) => {
      console.log(data);
    });

    this.isLogged.subscribe((data) => {
      if (data) {
        console.log('User logged in successfully');
      } else {
        console.log('User logged out due to session timeout.');
      }
    });

    setTimeout(() => this.isLogged.next(false), 10000);
  }
}
