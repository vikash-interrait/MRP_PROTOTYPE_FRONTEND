import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: false,
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class Signup {
  
  signupForm!: FormGroup;
  passwordMismatch: boolean = false;

  constructor(
    private fb: FormBuilder,
    // private authService: authenticationGuard,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      verifyPassword: ['', Validators.required]
    });
  }

  onSubmit(): void {
    const { password, verifyPassword } = this.signupForm.value;

    if (password !== verifyPassword) {
      this.passwordMismatch = true;
      return;
    }

    if (this.signupForm.valid) {
      this.passwordMismatch = false;

      const { username, email, password } = this.signupForm.value;

      // this.authService.signup({ username, email, password }).subscribe({
      //   next: () => {
      //     this.router.navigate(['/login']);
      //   },
      //   error: (err: any) => {
      //     console.error('Signup error:', err);
      //     // Show error toast or UI message if needed
      //   }
      // });
    }
  }
}
