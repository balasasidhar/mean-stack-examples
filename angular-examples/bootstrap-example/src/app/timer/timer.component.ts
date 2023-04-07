import { Component } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
})
export class TimerComponent {
  counter: number = 0;
  interval: any;

  constructor() {
    console.log("I'm from constructor!", TimerComponent.name);
    this.counter = 0;
  }

  ngOnInit() {
    console.log("I'm from ngOnInit!", TimerComponent.name);
    this.interval = setInterval(() => (this.counter += 1), 1000);
  }

  ngOnDestroy() {
    console.log("I'm from ngOnDestroy!", TimerComponent.name);
    clearInterval(this.interval);
  }

  ngOnChanges() {
    console.log("I'm from ngOnChanges!", TimerComponent.name);
  }

  ngDoCheck() {
    console.log("I'm from ngDoCheck!", TimerComponent.name);
  }

  ngAfterViewInit() {
    console.log("I'm from ngAfterViewInit!", TimerComponent.name);
  }

  ngAfterViewChecked() {
    console.log("I'm from ngAfterViewChecked!", TimerComponent.name);
  }
}
