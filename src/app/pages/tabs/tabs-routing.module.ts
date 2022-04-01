import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [

  {
    path:'',
    redirectTo: '/tabs/contact',
    pathMatch: 'full'
  },

  {
    path: '',
    component: TabsPage,
    children: [
      { path: 'account', loadChildren: () => import('../avatar/avatar.module').then( m => m.AvatarPageModule ) },
      { path: 'contact', loadChildren: () => import('../segment/segment.module').then( m => m.SegmentPageModule ) },
      { path: 'settings', loadChildren: () => import('../list-reorder/list-reorder.module').then( m => m.ListReorderPageModule ) } 
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
