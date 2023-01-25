import { UserDataResolver } from './../resolvers/userData.resolver';
import { HomeGuard } from './../guards/home.guard';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    canActivate:[HomeGuard],
    resolve: {
      userData: UserDataResolver
    },
    children: [
      {
        path: 'feeds',
        loadChildren: () => import('../pages/feeds/feeds.module').then( m => m.FeedsPageModule)
      },
      {
        path: 'notifications',
        loadChildren: () => import('../pages/notifications/notifications.module').then( m => m.NotificationsPageModule)
      },
      {
        path: 'messages',
        loadChildren: () => import('../pages/profile/profile.module').then( m => m.MessagesPageModule)
      },
      {
        path: 'transfer',
        loadChildren: () => import('../pages/transfer/transfer.module').then( m => m.TransferPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
