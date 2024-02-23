import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarSaldoComponent } from './buscar-saldo.component';

describe('BuscarSaldoComponent', () => {
  let component: BuscarSaldoComponent;
  let fixture: ComponentFixture<BuscarSaldoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuscarSaldoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuscarSaldoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
