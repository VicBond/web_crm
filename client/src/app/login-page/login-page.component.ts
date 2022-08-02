import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit, OnDestroy {

  form!: FormGroup;
  aSub!: Subscription;

  constructor(private auth: AuthService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)])
    })
  }

  ngOnDestroy() {
    if (this.aSub){
      this.aSub.unsubscribe();
    }
  }

  onSubmit() {
    this.form.disable()

    // const user = {
    //   email: this.form.value.email,
    //   password: this.form.value.password
    // }
    this.aSub = this.auth.login(this.form.value).subscribe(
      // () => console.log('login successful'),
      () => this.router.navigate(['/overview']),
      error => {
        console.warn(error)
        this.form.enable()
      }
    )
  }

}
