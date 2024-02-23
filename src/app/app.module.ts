import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarSaldosComponent } from './listar-saldos/listar-saldos.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistrarSaldoComponent } from './registrar-saldo/registrar-saldo.component';
import { FormsModule } from '@angular/forms';
import { BuscarSaldoComponent } from './buscar-saldo/buscar-saldo.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarSaldosComponent,
    RegistrarSaldoComponent,
    BuscarSaldoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
