import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit, OnDestroy {

  cargando: boolean;
  subcription: Subscription;
  constructor( public authServices: AuthService,
               public store: Store<AppState> ) { }

  ngOnInit() {
    this.subcription = this.store.select('ui')
    .subscribe( ui => this.cargando = ui.isLoading);
  }
  onSubmit( data ) {
    console.log( data );
    this.authServices.crearUsuario( data.nombre, data.email, data.password );
  }
  ngOnDestroy(): void {
    this.subcription.unsubscribe();
  }
}
