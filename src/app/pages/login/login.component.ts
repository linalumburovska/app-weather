import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
  }

  ngOnInit() { 
    this.initForm();
  }

  loginUser() {
    if(this.loginForm.valid) {
      this.authService.login(this.loginForm.value)
    }
  }

  initForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, 
        Validators.pattern("^(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&^])[A-Za-z0-9@$!%*?&^]{8}")]]
    });
  }

}
