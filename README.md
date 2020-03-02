# 🍿 moviedb

![dependencies](https://badgen.net/david/dep/matthias-hampel/moviedb)
![dependencies](https://badgen.net/david/dev/matthias-hampel/moviedb)

_moviedb_ is an application that uses [the Movie Database (TMDb)](https://www.themoviedb.org/) and is built with React.
The application was created for demo purposes and shows some [React](https://reactjs.org/), [React Redux](https://react-redux.js.org/) and [TypeScript](https://www.typescriptlang.org/) concepts.

To retrieve data from the Movie Database, an API key must be generated first. To register for an API key, click the [API link](https://www.themoviedb.org/settings/api) from within your account settings page.
Access to the movie database is free of charge. More information about authentication and using the API can be found in the [documentation](https://developers.themoviedb.org/3/).

## Before you start

To make [environment variables permanent](https://create-react-app.dev/docs/adding-custom-environment-variables#adding-development-environment-variables-in-env), they are defined in `.env` files.
Create a new `.env.local` file for you development environment and add the following values:

| Variable Name                | Description                 | Example                                                                                            |
| ---------------------------- | --------------------------- | -------------------------------------------------------------------------------------------------- |
| `REACT_APP_MOVIE_DB_API_KEY` | Your Movie Database API Key | `ewogICJtZXNzYWdlIjogIkkgaG9wZSB0aGF0IEkgY291bGQgaGVscCB5b3UhIFBsZWFzZSBsZWF2ZSBhIHN0YXIgOikiCn0=` |

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
