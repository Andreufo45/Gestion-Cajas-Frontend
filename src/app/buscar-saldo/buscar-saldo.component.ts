import { Component } from '@angular/core';
import { Saldo } from '../saldo';
import { SaldoService } from '../saldo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscar-saldo',
  templateUrl: './buscar-saldo.component.html',
  styleUrl: './buscar-saldo.component.css'
})
export class BuscarSaldoComponent {

  fecha: Date;
  idCaja: number;
  saldos: Saldo[];

  constructor(private saldoService: SaldoService, private router: Router) { }
  
  buscarSaldoByDate() {
      this.saldoService.buscarSaldoByDate(this.fecha, this.idCaja).subscribe(dato => {
        this.saldos = dato;
      })
    }

  irALaListaDeSaldos() {
    this.router.navigate(['/saldos'])
  }

  onSubmit() {
    this.buscarSaldoByDate();
  }

}
