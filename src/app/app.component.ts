import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})


export class AppComponent {
  title = 'my-app';
}

export class AuthComponent implements OnInit {
  email = '';
  password = '';
  isLoginMode = true;

  ngOnInit() {
    // Initialization logic here
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }

    const email = form.value.email;
    const password = form.value.password;

    if (this.isLoginMode) {
      // Implement login logic here
    } else {
      // Implement registration logic here
    }
  }

}
