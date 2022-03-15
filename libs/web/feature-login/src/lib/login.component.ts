import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'ct-login',
  template: `
    <div class="container mx-auto p-8">
      <mat-card>
        <mat-card-content>
          <h2 class="text-center">Log In</h2>
          <div class="text-center mb-4">
            <a routerLink="/register" class="hover:underline">
              Do not have an account? Create one
            </a>
          </div>
          <form #loginForm="ngForm" (ngSubmit)="onSubmit(loginForm)">
            <div class="flex flex-col items-center">
              <mat-form-field class="w-1/2">
                <mat-label>Username</mat-label>
                <mat-icon matPrefix>person_outline</mat-icon>
                <input
                  matInput
                  type="text"
                  name="username"
                  #username="ngModel"
                  [(ngModel)]="loginFormData.username"
                  placeholder="Username"
                  required
                />
                <mat-error *ngIf="username.invalid">
                  Username is required
                </mat-error>
              </mat-form-field>
              <mat-form-field class="w-1/2">
                <mat-label>Password</mat-label>
                <mat-icon matPrefix>lock</mat-icon>
                <input
                  matInput
                  type="password"
                  name="password"
                  #password="ngModel"
                  [(ngModel)]="loginFormData.password"
                  placeholder="Password"
                  required
                />
                <mat-error *ngIf="password.invalid">
                  Password is required
                </mat-error>
              </mat-form-field>

              <button
                type="submit"
                mat-raised-button
                color="primary"
                [disabled]="loginForm.invalid"
              >
                Login
              </button>
            </div>
          </form>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  loginFormData = {
    username: '',
    password: '',
  };

  onSubmit(loginForm: NgForm) {
    console.log(this.loginFormData);
  }
}

@NgModule({
  declarations: [LoginComponent],
  exports: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    RouterModule,
  ],
})
export class LoginComponentModule {}
