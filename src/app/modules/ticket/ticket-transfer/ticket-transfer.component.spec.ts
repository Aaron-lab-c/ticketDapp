import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketTransferComponent } from './ticket-transfer.component';

describe('TicketTransferComponent', () => {
  let component: TicketTransferComponent;
  let fixture: ComponentFixture<TicketTransferComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TicketTransferComponent]
    });
    fixture = TestBed.createComponent(TicketTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
