# React Task Tracker App

This project was followed by Trversy Media's [React JS Crash Course 2021](https://www.youtube.com/watch?v=w7ejDZ8SWv8).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.\
See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

```bash
npm install -g serve
serve -s build -p 8000
```

### `npm install json-server`

Get a fake REST API with a quick back-end for prototyping and mocking.\
Add ` {"server": "json-server --watch db.json --port 5000"} ` to `package.json`'s `"scripts"` part.

### `npm run server`

Run the above json-server to experiment POST, GET, DELETE on the back-end server.

### `npm install react-router-dom`

Have to install `react-router-dom` for Routes.
