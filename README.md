# 🍿 moviedb

_moviedb_ is an application that uses [The Movie Database (TMDb)](https://www.themoviedb.org/) and is built with React.
The application was created for demo purposes and shows some [React](https://reactjs.org/), [React Redux](https://react-redux.js.org/) and [TypeScript](https://www.typescriptlang.org/) concepts.

To retrieve data from the Movie Database, an API key must be generated first. To register for an API key, click the [API link](https://www.themoviedb.org/settings/api) from within your account settings page.
Access to the movie database is free of charge. More information about authentication and using the API can be found in the [documentation](https://developers.themoviedb.org/3/).

## Before you start

Once you obtained an API key, make sure you replace `{{apiToken}}` in the file `src/redux/movies/actions.ts` with your API key.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

### `yarn format`

Use [prettier](https://prettier.io/) to format the source code.

### `yarn lint`

Check source code for potential problems.
