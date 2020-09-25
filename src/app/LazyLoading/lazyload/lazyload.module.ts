import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { lazyRoutingModule } from './lazy-routing.module';
import { LazyComponent } from './lazy/lazy.component';

@NgModule({
  declarations: [AdminComponent, UserComponent, LazyComponent],
  imports: [CommonModule, lazyRoutingModule],
})
export class LazyloadModule {}
