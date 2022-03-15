import { NgModule } from '@angular/core';
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
    ]),
  ],
  exports: [RouterModule],
})
export class WebShellModule {}
