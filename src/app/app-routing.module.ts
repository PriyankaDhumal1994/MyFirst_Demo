import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CareerComponent } from './career/career.component';
import { EmailusComponent } from './emailus/emailus.component';
import { CallusComponent } from './callus/callus.component';
import { MyGaurdGuard } from './my-gaurd.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutusComponent, canActivate: [MyGaurdGuard] },
  {
    path: 'lazyLoading',
    loadChildren: () =>
      import('./LazyLoading/lazyload/lazyload.module').then(
        (m) => m.LazyloadModule
      ),
  },
  {
    path: 'contact',
    component: CareerComponent,
    children: [
      { path: 'email', component: EmailusComponent },
      { path: 'call', component: CallusComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
