import { Action } from '@ngrx/store';
import { User } from './user.model';


export const SET_USER = '[Auth] Set user';
export const UNSET_USER = '[Auth] Unset user';
export class SetUserAction implements Action {
  readonly type = SET_USER;
  constructor( public user: User ) {}
}
export class UnsetUserAction implements Action {
  readonly type = UNSET_USER;
  constructor(  ) {}
}
export type accion = SetUserAction | UnsetUserAction;
