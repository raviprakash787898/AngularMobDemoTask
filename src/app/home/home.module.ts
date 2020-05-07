import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { TableModule } from 'primeng/table';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule,
    TableModule
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent],
  providers: []
})
export class HomeModule {}
