import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isLoginMode = true;
  email: string;
  password: string;

  constructor(private authService: AuthService) { }

  ngOnInit(): void { }

  onSubmit(form: NgForm): void {
    if (this.isLoginMode) {
      // Login user
      this.authService.login(this.email, this.password);
    } else {
      // Register user
      this.authService.register(this.email, this.password);
    }
  }

  onSwitchMode(): void {
    this.isLoginMode = !this.isLoginMode;
  }
}
