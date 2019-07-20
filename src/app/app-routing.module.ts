import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LayoutComponent} from './admin/app-layout/layout/layout.component';
import {AdminLoginComponent} from './admin/admin-login/admin-login.component';


const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      {path: '', pathMatch: 'full', redirectTo: 'mother'},
      {path: 'mother', loadChildren: './admin/pages/mother/mother.module#MotherModule'},
      {path: 'usersave', loadChildren: './admin/pages/usersave/usersave.module#UsersaveModule'},
      {path: 'usersum', loadChildren: './admin/pages/usersum/usersum.module#UsersumModule'}
    ]
  },
  {path: 'admin-login', component: AdminLoginComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
