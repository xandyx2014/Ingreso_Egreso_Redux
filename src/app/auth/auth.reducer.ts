import * as fromAuth from './auth.actions';
import { User } from './user.model';

export interface AuthState {
  user: User;
}
const estadoInicial: AuthState = {
  user: null
};
export function authReducer( state = estadoInicial, accion: fromAuth.accion): AuthState {
  switch ( accion.type ) {
    case fromAuth.SET_USER:
    return {
      user: { ...accion.user }
    };
    default:
      return state;
  }
}
