import { NgModule } from '@angular/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { RouterModule } from '@angular/router';
import { LayoutComponent, LayoutComponentModule } from './layout.component';

@NgModule({
  imports: [
    LayoutComponentModule,
    RouterModule.forRoot([
      {
        path: '',
        component: LayoutComponent,
        children: [],
      },
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
      {
        path: 'login',
        loadChildren: () =>
          import('@nx-post-vscode/web/feature-login').then(
            (m) => m.WebFeatureLoginModule
          ),
      },
      {
        path: 'register',
        loadChildren: () =>
          import('@nx-post-vscode/web/feature-register').then(
            (m) => m.WebFeatureRegisterModule
          ),
      },
    ]),
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'outline' },
    },
  ],
  exports: [RouterModule],
})
export class WebShellModule {}
