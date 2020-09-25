import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { Parent1Component } from './parent1/parent1.component';
import { Child2Component } from './child2/child2.component';
import { Parent2Component } from './parent2/parent2.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { PipeCmpComponent } from './pipe-cmp/pipe-cmp.component';
import { SquarepipePipe } from './squarepipe.pipe';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CareerComponent } from './career/career.component';
import { RoutingComponent } from './routing/routing.component';
import { EmailusComponent } from './emailus/emailus.component';
import { CallusComponent } from './callus/callus.component';
import { FormDemoComponent } from './form-demo/form-demo.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { DemoLifecycleHooksComponent } from './demo-lifecycle-hooks/demo-lifecycle-hooks.component';
//import { LazyComponent } from './LazyLoading/lazy/lazy.component';
//import { AdminComponent } from './src/app/lazyLoad/admin/admin.component';
//import { UserComponent } from './src/app/lazyLoad/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    ParentComponent,
    ChildComponent,
    Parent1Component,
    Child2Component,
    Parent2Component,
    EmpListComponent,
    EmpDetailsComponent,
    PipeCmpComponent,
    SquarepipePipe,
    HomeComponent,
    AboutusComponent,
    CareerComponent,
    RoutingComponent,
    EmailusComponent,
    CallusComponent,
    FormDemoComponent,
    ReactiveFormComponent,
    DemoLifecycleHooksComponent,
    //LazyComponent,
    //AdminComponent,
    //UserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
