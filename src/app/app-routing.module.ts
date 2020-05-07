import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserInfoModule } from './user-info/user-info.module';
import { HomeModule } from './home/home.module';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () => HomeModule
      },
      {
        path: 'userinfo/:id',
        loadChildren:() => UserInfoModule
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
