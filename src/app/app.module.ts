import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// modulos-------------------
import { AppRoutingModule } from './app-routing.module';
// NGRX-----------------------
import { StoreModule } from '@ngrx/store';
import { AppReducer } from './app.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
//  Firebase-------------------
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
// graficas------------------------
// environment----------------------
import { environment } from '../environments/environment';
// componentes-----------------------
import { AppComponent } from './app.component';
// Modulos Personalizados ------------------------
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(  environment.firebase ),
    AngularFirestoreModule,
    StoreModule.forRoot(AppReducer),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
