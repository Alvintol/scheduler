# Interview Scheduler Project

Interview Scheduler is a mock application that allows users to book and cancel interviews.

!["Screenshot of Vertical/Narrow View"](https://github.com/Alvintol/scheduler/blob/master/public/images/VerticalView.png?raw=true)
!["Screenshot appointment create fields"](https://github.com/Alvintol/scheduler/blob/master/public/images/Create.png?raw=true)
!["Screenshot of error message"](https://github.com/Alvintol/scheduler/blob/master/public/images/Error.png?raw=true)
!["Screenshot appointment removal confirmation"](https://github.com/Alvintol/scheduler/blob/master/public/images/Confirm.png?raw=true)


## Setup

- Install dependencies with `npm install`
- Login and Create Postgres database with `psql -U development`
- Build and seed database tables

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```

## Dependencies

- Axios: Promise-based HTTP client that works both in the browser and in a Node.js environment.
- Classnames: A simple JavaScript utility for conditionally joining classNames together.
- Normalize.css: A modern, HTML5-ready alternative to CSS.
- React: Open-source, front end, JavaScript library for building user interfaces or UI components. 
- React-dom: React package for working with the DOM.
- React-scripts: Scripts and configuration used by Create React App.

### Dev Dependencies

- Babel: A command line interface that works exactly the same as the Node.js.
- Storybook: UI development environment for your React components.
- Testing-library/react: The React Testing Library is a very light-weight solution for testing React components.
- Testing-library/jest-dom: A companion library for Testing Library that provides custom DOM element matchers for Jest.
- Testing-library/react-hooks: Allows you to create a simple test harness for React hooks that handles running them within the body of a function component.
- Node-sass: Library that provides binding for Node.js to LibSass, the C version of the popular stylesheet preprocessor, Sass.
- Prop-types: Allows documentation of the intended types of properties passed to components.
- React-test-renderer: Provides a React renderer that can be used to render React components to pure JavaScript objects, without depending on the DOM or a native mobile environment.

## Stretch Completed

- Added database to Heroku server
- Connected Github to CircleCi
