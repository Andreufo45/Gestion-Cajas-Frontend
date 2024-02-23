import { Component } from '@angular/core';
import { Saldo } from '../saldo';
import { SaldoService } from '../saldo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-saldo',
  templateUrl: './registrar-saldo.component.html',
  styleUrl: './registrar-saldo.component.css'
})
export class RegistrarSaldoComponent {


  saldo: Saldo = new Saldo();
  constructor(private saldoService: SaldoService, private router: Router) { }

  ngOnInit(): void {

  }

  guardarSaldo() {
    this.saldoService.registrarSaldo(this.saldo).subscribe(dato => {
      console.log(dato);
      this.irALaListaDeSaldos();
    }, error => console.log(error))
  }

  irALaListaDeSaldos() {
    this.router.navigate(['/saldos'])
  }

  onSubmit() {
    this.guardarSaldo();
  }
}
