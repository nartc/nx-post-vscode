import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'ct-layout',
  template: `
    <mat-toolbar class="justify-between" color="primary">
      <a class="text-2xl" routerLink="/">Nx Post</a>
      <div class="flex items-center gap-4">
        <a class="text-md hover:underline" routerLink="/posts">Posts</a>
        <button [matMenuTriggerFor]="userMenu">
          <span class="sr-only">Open user menu</span>
          <img
            src="https://nartc.me/assets/static/head.png"
            alt="Avatar of logged in user"
            class="w-10 h-10 rounded-full object-cover object-center"
          />
        </button>
      </div>
    </mat-toolbar>
    <mat-menu #userMenu="matMenu">
      <button mat-menu-item (click)="onLogoutClick()">
        <mat-icon>logout</mat-icon>
        <span>Logout</span>
      </button>
    </mat-menu>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {
  onLogoutClick() {
    console.log('logout click');
  }
}

@NgModule({
  declarations: [LayoutComponent],
  exports: [LayoutComponent],
  imports: [MatToolbarModule, RouterModule, MatMenuModule, MatIconModule],
})
export class LayoutComponentModule {}
