import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { LazyComponent } from './lazy/lazy.component';

const lazyRoutes: Routes = [
  {
    path: '',
    component: LazyComponent,
    children: [
      { path: 'admin', component: AdminComponent },
      { path: 'user', component: UserComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(lazyRoutes)],
  exports: [RouterModule],
})
export class lazyRoutingModule {}
