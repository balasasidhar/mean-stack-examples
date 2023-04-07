import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'bootstrap-example';

  emailAddress = '';
  // @ViewChild('emailAddress') emailAddress: ElementRef | undefined;
  @ViewChild('emailBody') emailBody: ElementRef | undefined;

  isOnline = false;
  showTimer = false;

  onSubmitHandler(): void {
    // const emailAddressValue = this.emailAddress?.nativeElement.value;
    const emailBodyValue = this.emailBody?.nativeElement.value;
    console.log(this.emailAddress);
    console.log(emailBodyValue);
  }

  toggleStatus(): void {
    this.isOnline = !this.isOnline;
  }

  toggleTimer(): void {
    this.showTimer = !this.showTimer;
  }

  constructor() {
    console.log("I'm from constructor!");
  }

  ngOnChanges() {
    // @Input() @Output()
    console.log("I'm from ngOnChanges!");
  }

  ngOnInit() {
    console.log("I'm from ngOnInit!");
  }

  ngDoCheck() {
    console.log("I'm from ngDoCheck!");
  }

  ngAfterViewInit() {
    console.log("I'm from ngAfterViewInit!");
  }

  ngAfterViewChecked() {
    console.log("I'm from ngAfterViewChecked!");
  }

  ngOnDestroy() {
    console.log("I'm from ngOnDestroy!");
  }
}
