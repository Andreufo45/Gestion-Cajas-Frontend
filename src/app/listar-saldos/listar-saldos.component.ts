import { Component, OnInit } from '@angular/core';
import { Saldo } from '../saldo';
import { SaldoService } from '../saldo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-saldos',
  templateUrl: './listar-saldos.component.html',
  styleUrl: './listar-saldos.component.css'
})
export class ListarSaldosComponent implements OnInit {



  saldos: Saldo[];

  constructor(private saldoService: SaldoService, private router: Router) { }

  ngOnInit(): void {
    this.obtenerSaldos();
  }

  private obtenerSaldos() {
    this.saldoService.obtenerListaDeSaldos().subscribe(dato => {
      this.saldos = dato;
    })
  }

  eliminarSaldo(id: number) {
    this.saldoService.eliminarSaldo(id).subscribe(dato => {
      console.log(dato);
      this.obtenerSaldos();
    })
  }

  anadirSaldo() {
    this.router.navigate(['/registrar-saldo'])
  }
}
