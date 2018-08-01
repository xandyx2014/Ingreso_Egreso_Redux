// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBgsco2NcrmQSnhgxrtxe14u3pz2vfAbzg',
    authDomain: 'egreso-ingresoapp.firebaseapp.com',
    databaseURL: 'https://egreso-ingresoapp.firebaseio.com',
    projectId: 'egreso-ingresoapp',
    storageBucket: 'egreso-ingresoapp.appspot.com',
    messagingSenderId: '838735400642'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
