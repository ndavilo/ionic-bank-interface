import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerifyappPage } from './verifyapp.page';

const routes: Routes = [
  {
    path: '',
    component: VerifyappPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerifyappPageRoutingModule {}
