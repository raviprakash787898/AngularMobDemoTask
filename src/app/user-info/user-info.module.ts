import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserInfoComponent } from './user-info.component';
import { UserInfoRoutingModule } from './user-info-routing.module';
import { TableModule } from 'primeng/table';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UserInfoRoutingModule,
    TableModule,
    NgbModule
  ],
  declarations: [UserInfoComponent],
  exports: [UserInfoComponent],
  providers: []
})
export class UserInfoModule {}
