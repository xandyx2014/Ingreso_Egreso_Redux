import * as fromUi from './shared/ui.reducer';
import { ActionReducerMap } from '@ngrx/store';
import * as fromAuth from './auth/auth.reducer';
export interface AppState {
  ui: fromUi.State;
  auth: fromAuth.AuthState;
}
export const AppReducer: ActionReducerMap<AppState> = {
  ui: fromUi.uiReducer,
  auth: fromAuth.authReducer
};
