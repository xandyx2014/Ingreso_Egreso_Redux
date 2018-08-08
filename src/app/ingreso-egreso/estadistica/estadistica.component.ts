import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { Subscription } from 'rxjs';
import { IngresoEgreso } from '../ingreso-egreso.model';

@Component({
  selector: 'app-estadistica',
  templateUrl: './estadistica.component.html',
  styles: []
})
export class EstadisticaComponent implements OnInit {
  ingreso: number;
  egreso: number;
  cuantoIngresos: number;
  cuantosEgresos: number;
  subcription: Subscription = new Subscription();
  doughnutChartLabels: string[] = ['Ingresos', 'Egresos'];
  doughnutChartData: number[] = [];
  constructor( private store: Store<AppState>) { }

  ngOnInit() {
    this.subcription = this.store.select('ingresoEgreso').subscribe( ingresoEgreso => {
      this.contarIngresoEgreso( ingresoEgreso.items );
    });
  }
  contarIngresoEgreso( items: IngresoEgreso[]) {
    this.ingreso = 0;
    this.egreso = 0;
    this.cuantosEgresos = 0;
    this.cuantoIngresos = 0;
    items.forEach( item => {
      if ( item.tipo === 'ingreso') {
        this.cuantoIngresos ++;
        this.ingreso += item.monto;
      } else {
        this.cuantosEgresos ++;
        this.egreso += item.monto;
      }
    });
    this.doughnutChartData = [ this.ingreso, this.egreso ];
  }
}
