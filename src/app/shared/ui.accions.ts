import { Action } from '@ngrx/store';

export const ACTIVAR_LOADING = '[IU Loadign] Cargando...';
export const DESACTIVAR_LOADING = '[IU Loadign] Fin Cargando...';

export class ActivarLoadingAction implements Action {
  readonly type = ACTIVAR_LOADING;
}
export class DesactivarLoadingAction implements Action {
  readonly type = DESACTIVAR_LOADING;
}
export type acciones = ActivarLoadingAction | DesactivarLoadingAction;
