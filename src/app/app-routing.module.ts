import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'ticket',
    loadChildren: () => import('./modules/ticket/ticket.module').then(mod => mod.TicketModule)
  },
  {
    path: '',
    loadChildren: () => import('./modules/ticket/ticket.module').then(mod => mod.TicketModule)
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
