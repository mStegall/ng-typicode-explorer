import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserSearchComponent } from '../user-search/user-search.component';
import { UserHomeComponent } from '../user-home/user-home.component';

const routes: Routes = [
  {
    path:'',
    component: UserSearchComponent
  },
  {
    path: 'user/:id',
    component: UserHomeComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
