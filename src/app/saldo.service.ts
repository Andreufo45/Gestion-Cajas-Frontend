import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Saldo } from './saldo';

@Injectable({
  providedIn: 'root'
})
export class SaldoService {

  private baseURL = "http://localhost:8080/api/v1/saldos";

  constructor(private httpClient: HttpClient) { }

  obtenerListaDeSaldos(): Observable<Saldo[]> {
    return this.httpClient.get<Saldo[]>(`${this.baseURL}`);
  }

  buscarSaldoByDate(fecha: Date, idCaja: number): Observable<Saldo[]> {
    const headers = new HttpHeaders().append(
      'Content-Type',
      'application/x-www-form-urlencoded'
    );

    const body = {};
    if (fecha != null) {
      const params = new HttpParams()
        .append('fecha', fecha.toString())
        .append('idCaja', idCaja);


      return this.httpClient.post<Saldo[]>(`${this.baseURL}/search`, body, {
        headers: headers,
        params: params,
      });
    }
    return new Observable<Saldo[]>;
  }
  registrarSaldo(saldo: Saldo): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, saldo);
  }

  eliminarSaldo(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
