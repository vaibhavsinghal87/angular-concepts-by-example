// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "<your API key here>",
    authDomain: "<your domain here>",
    databaseURL: "<your DB URL here>",
    projectId: "<your Project ID here>",
    storageBucket: "<your storage here>",
    messagingSenderId: "<your sender ID here>"
  }
};
