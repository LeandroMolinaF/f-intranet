import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   loginForm =  this.fb.group({
      rut: ['', [Validators.required, Validators.min(1)]],
      password: ['', [Validators.required, Validators.min(1)]],
    });

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    const {rut, password} = this.loginForm.value
    this.authService.login(rut, password).subscribe({
      next: (response) => {
        if(response.role = 'TEACHER'){
          this.router.navigate(['home/home']);
        }
      },
      error: (error) =>{
        console.error(error);
      }
    });
  }

}
