import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginRoute = this.route.snapshot.params;
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });
  onSubmit() {
    console.log(this.loginForm.value);
  }
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {}

  get email() {
    return this.loginForm.get('email')!;
  }
  get password() {
    return this.loginForm.get('password')!;
  }
}
