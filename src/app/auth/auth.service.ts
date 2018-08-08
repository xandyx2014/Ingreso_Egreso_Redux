import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import Swal from 'sweetalert2';
import { map } from 'rxjs/operators';
import { User } from './user.model';
import { AngularFirestore } from 'angularfire2/firestore';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducer';
import { ActivarLoadingAction, DesactivarLoadingAction } from '../shared/ui.accions';
import { SetUserAction, UnsetUserAction } from './auth.actions';
import { Subscription } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usersubscription: Subscription = new Subscription();
  private usuario: User;
  constructor( private afAuth: AngularFireAuth,
               private router: Router,
               private afDB: AngularFirestore,
               private store: Store<AppState> ) { }
  initAuthListener() {
    this.afAuth.authState.subscribe( fbUser => {
      if ( fbUser ) {
        this.usersubscription = this.afDB.doc(`${fbUser.uid}/usuario`).valueChanges().subscribe( (usuarioObj: any) => {
          const newUser = new User( usuarioObj );
          this.store.dispatch( new SetUserAction( newUser ));
          this.usuario = newUser;
        });
      } else {
        this.usuario = null;
        this.usersubscription.unsubscribe();
      }
    });
  }
  crearUsuario( nombre: string, email: string, password: string ) {
    this.store.dispatch( new ActivarLoadingAction() );
    this.afAuth.auth
    .createUserWithEmailAndPassword( email, password )
    .then( (res: any) => {
      const user: User = {
        uid: res.user.uid,
        nombre: nombre,
        email: email
      };
      this.afDB.doc(`${ user.uid }/usuario`)
      .set( user )
      .then( () => {
        this.router.navigate(['/']);
        this.store.dispatch( new DesactivarLoadingAction() );
      });
    })
    .catch( err => {
      console.log( err );
      Swal( 'Error en el login', err.message, 'error' );
      this.store.dispatch( new DesactivarLoadingAction() );
    });
  }
  login( email: string, password: string ) {
    this.store.dispatch( new ActivarLoadingAction() );
    this.afAuth.auth
    .signInWithEmailAndPassword( email, password)
    .then( res => {

      this.router.navigate(['/']);
      this.store.dispatch( new DesactivarLoadingAction() );
    })
    .catch( err => {
      console.log( err );
      Swal( 'Error en el login', err.message, 'error' );
      this.store.dispatch( new DesactivarLoadingAction() );
    });
  }
  logout() {
    this.router.navigate(['/login']);
    this.afAuth.auth.signOut();
    this.store.dispatch( new UnsetUserAction() );
  }
  isAuth() {
    return this.afAuth.authState.pipe(
      map( fbUser => {
        if ( fbUser === null) {
          this.router.navigate(['/login']);
        }
        return fbUser != null; })
    );
  }
  getUsuario() {
    return {...this.usuario};
  }
}
