import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketComponent } from './ticket/ticket.component';
import { TicketBuyComponent } from './ticket-buy/ticket-buy.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { TicketTransferComponent } from './ticket-transfer/ticket-transfer.component';
const routes: Routes = [
  { path: '', component: TicketComponent },
  { path: 'buy/:id', component: TicketBuyComponent },
  { path: 'ticketlist', component: TicketListComponent },
  { path: 'tickettransfer', component: TicketTransferComponent }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketRoutingModule implements OnInit{
  ngOnInit(): void {
  }

  constructor(){
    
  }

}
