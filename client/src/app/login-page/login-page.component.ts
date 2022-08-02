import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  form!: FormGroup;
  aSub!: Subscription;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)])
    })
  }

  onSubmit() {
    this.form.disable()

    // const user = {
    //   email: this.form.value.email,
    //   password: this.form.value.password
    // }
    this.aSub = this.auth.login(this.form.value).subscribe(
      () => console.log('login successful'),
      error => {
        console.warn(error)
        this.form.enable()
      }
    )
  }

}
