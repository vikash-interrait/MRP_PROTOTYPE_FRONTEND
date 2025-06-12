import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { authenticationGuard } from '../../../guards/authentication-guard';
import { Router } from '@angular/router';
import { AppRoutingModule } from '../../../app-routing-module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  private authService = inject(authenticationGuard)
  private fb = inject(FormBuilder)
  private router = inject(Router)
  private loadingService = inject(AppRoutingModule)

  loadingState = computed(() => this.loadingService.isLoading())


  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const loginData = this.loginForm.value;
      console.log("login data", loginData)

      const payload = {
        username: this.loginForm.value.username,
        password: this.loginForm.value.password
      }

      // Show loading bar
      this.loadingService.setLoading()

      this.authService.login(payload).subscribe({
        next: (res: { data: any; }) => {
          console.log('Login success:', res.data);

          const data = res.data

          const user = {
            username: data.user.username,
            role: data.user.role
          }
          // update the user in services
          this.authService.user.set(user)


          // store token in the localstorage
          localStorage.setItem("access_token", data.access_token)
          localStorage.setItem("user", JSON.stringify(user))

          // Navigate to appropriate router as user role
          let navigateRoute: string = ''

          if (user.role === "Admin") {
            navigateRoute = "/admin"
          } else if (user.role === "Editor") {
            navigateRoute = "/editor"
          } else if (user.role === "Viewer") {
            navigateRoute = "viewer"
          }

          this.loadingService.closeLoading()

          return this.router.navigate([navigateRoute])
        },
        error: (err: any) => {
          this.loadingService.closeLoading()
          console.error('Login failed:', err);
          // You can show an error message to the user
        },
      });



    } else {
      this.loginForm.markAllAsTouched(); // Mark all fields as touched to show validation
    }
  }
}

