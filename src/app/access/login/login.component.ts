import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { first } from "rxjs/operators";

import { AuthService } from "../../core/services/application/auth.service";

@Component({ 
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  submitted: boolean = false;
  loginForm: FormGroup;

  get f() {
    return this.loginForm.controls;
  }

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) {}

  ngOnInit() {
    //log out the user
    this.authService.logout();
    this.bindLoginFormGroup();
  }

  bindLoginFormGroup() {
    this.loginForm = this.formBuilder.group({
      email: [
        "test@email.com",
        [Validators.required, Validators.email]
      ],
      password: ["test@1234", [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.authService
      .login(this.f.email.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        data => {
          console.log(data);          
          this.router.navigate(["/"]); //home page
        },
        error => {
           console.log(error);
        }
      );
  }
}
