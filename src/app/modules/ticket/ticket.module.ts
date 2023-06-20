import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketRoutingModule } from './ticket-routing.module';
import { TicketComponent } from './ticket/ticket.component';
import { FormsModule } from '@angular/forms';
import { TicketBuyComponent } from './ticket-buy/ticket-buy.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { TicketTransferComponent } from './ticket-transfer/ticket-transfer.component';


@NgModule({
  declarations: [
    TicketComponent,
    TicketBuyComponent,
    TicketListComponent,
    TicketTransferComponent
  ],
  imports: [
    CommonModule,
    TicketRoutingModule,
    FormsModule
  ]
})
export class TicketModule{


}
