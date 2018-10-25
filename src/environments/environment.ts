// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyDWG14v9MDGp3d1uK--C6H7G0gG9o5uhsQ",
    authDomain: "angular-concepts-by-examples.firebaseapp.com",
    databaseURL: "https://angular-concepts-by-examples.firebaseio.com",
    projectId: "angular-concepts-by-examples",
    storageBucket: "angular-concepts-by-examples.appspot.com",
    messagingSenderId: "563725722220"
  }
};
