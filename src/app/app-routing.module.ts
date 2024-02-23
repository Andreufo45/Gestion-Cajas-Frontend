import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarSaldosComponent } from './listar-saldos/listar-saldos.component';
import { RegistrarSaldoComponent } from './registrar-saldo/registrar-saldo.component';
import { BuscarSaldoComponent } from './buscar-saldo/buscar-saldo.component';

const routes: Routes = [
  { path: 'saldos', component: ListarSaldosComponent },
  { path: 'registrar-saldo', component: RegistrarSaldoComponent },
  { path: 'buscar-saldo', component: BuscarSaldoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
