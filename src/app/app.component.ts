import { Component, NgModule } from '@angular/core';
import { Reservacion } from './reservacion.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pruebas';

  fecha: string = ""
  hoy: Date = new Date();
  anio!: number
  mes!: number
  dia!: number
  habil: boolean = true
  respuesta: string = ""
  hora!: number
  resr!: Reservacion[]
  peli!: string

  cambio(): void{
    this.anio = Number.parseInt(this.fecha.slice(0,4))
    this.mes = Number.parseInt(this.fecha.slice(5,7))
    this.dia = Number.parseInt(this.fecha.slice(8,10))
    this.habil = true
    if(this.anio >= this.hoy.getFullYear()){
      if(this.mes >= this.hoy.getMonth() + 1){
        if(this.dia == this.hoy.getDate()){
          if(this.hora >= this.hoy.getHours()){
            this.habil = false
          }
        } else if(this.dia > this.hoy.getDate()){
          if(this.hora >= 9 && this.hora <= 20){
            this.habil = false
          }
        }
      }
    }
  }

  reserva(): void{
    this.resr = JSON.parse(localStorage.getItem("reser") || '[]')
    this.resr.push({movie: this.peli, hour: this.hora, day: this.dia, month: this.mes, year: this.anio})
    localStorage.setItem("reser", JSON.stringify(this.resr))
  }
}
