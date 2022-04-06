# Cuntry Challenge

[Online Site](https://country-explorer-info.netlify.app/)

[![Netlify Status](https://api.netlify.com/api/v1/badges/929fc8fe-71a6-467c-b90c-291f28ecdd59/deploy-status)](https://app.netlify.com/sites/country-explorer-info/deploys)

# What is this?

Web based application that has 3 panes, or sections and display Country information:

## Structure

This is the directory structure of the application.

```
  ├── __tests__ -> Unit tests
  ├── src -> Codebase
  │   ├── configs
  |   |     |-- index -> configs
  │   ├── componets
  |   |     |-- common  -> share component in the proyect
  |   |     |-- country -> all country components
  |   |     |-- layout -> Layout component
  │   ├── pages  -> pages component
  │   ├── store  -> handle word data
  │   ├── services
  │   ├── styles -> custom styles
  │   └── utils
  └── coverage
        ├── lcov-report
```

# Setup

## Clone the repo

`git clone git@github.com:alberto-moreno-sa/countries-info.git`

## Building as production the Site Locally

To build the site, you need to go through a one-time installation
procedure.

### Install The Dependencies

Before to install dependencies, you should have installed node 16

- Node >=16.14.0 (https://nodejs.org/en/)

### Eject the following command:

    npm i

### When finished installing the dependencies, execute the following command:

    npm run build

### To run the site, execute the following command:

    npm run production:start

## Note

Builds the app for production to the `.next` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\

# For Development

### Eject the following command:

    npm i

### Runs the app in the development mode, execute the following command:

    npm run dev

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

# For Testing

### Runs the app in the development mode, execute the following command:

Launches the test runner in the interactive watch mode.

`npm run test`

## Documentation

This section explains the most important parts of the project.

### Components

This folder has the components of site.

```
  ├── components -> Unit tests
  | |-- common -> share component in the proyect
  | |-- country -> Country Prewview and detail
  | |-- layout -> Layout component
  | |-- history -> hystory component
```

### pages

This file contains the pages of the site

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
