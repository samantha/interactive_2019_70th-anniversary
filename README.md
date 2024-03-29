## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

# Stack

Using MongoDB Atlas. Used a connection string

I chose MongoDB to store information and then retrieve it quickly later.

# Backend

```bash
$ yarn add express cors mongoose dotenv
$ yarn add nodemon
```

1. Create cluster and set up server.js

2. Run server

```bash
$ nodemon server
```
nodemon will continuously watch the backend and update

3. Create env, copy connection string, create environmental variable in .env to establish MongoDB database connection
4. Create database schema using Mongoose
5. Add API endpoint routes, so app can perform CRUD operations
6. Use Insomnia REST client or Postman to test API. Create new POST request with JSON
   Example:

```
{
    POST http://localhost:5000/staff/add
	"name": "Samantha",
	"social": {
		"linkedin": "https://www.linkedin.com/in/shangsan",
		"twitter": "https://twitter.com/SamanthaHangsan",
		"github": "https://github.com/samantha"
	}
}
```

# Frontend

1. yarn add react-bootstrap bootstrap

```
$ yarn add bootstrap --latest

import "bootstrap/dist/css/bootstrap.min.css"
```

2. Set up React Router to make it easier to route different urls to different React components

```
$ yarn add react-router-dom
```

Router element

```
<Router>
    <Navbar />
    <br>
    <Route path="/" exact component = {EventsList} />
    <Route path="/edit/:id" exact component = {EditEvent} />
    <Route path="/create" component = {CreateEvent} />
    <Route path="/staff" component = {CreateStaff} />
</Router>
```

3. Set up forms and install React Date Picker

```
$ yarn add react-datepicker
```

4. Install axios library to send HTTP requests to backend (promise based HTTP client for the browser and node.js)

```
$ yarn add axios
```

5. Add React-Slideshow, supports slide, fade, and zoom effects

```
$ yarn add react-slideshow-image
```

6. Add react-typist

```
$ yarn add react-typist
```

7. Add react-before-after-slider

```
$ yarn add react-before-after-slider
```

8. Add react-image-timeline

```
$ yarn add react-image-timeline
```

# Deployment
1. server.js port available
2. configure mongodb uri
3. serve build folder
```
$ yarn run build
```

We need build folder to put react application for heroku to see
Put build folder into folder

4. configure heroku post-build

## Pushing Application to Heroku
```
$ heroku create anniversary-70
$ heroku addons:create mongolab:sandbox
$ git add -A
$ git commit -m "MESSAGE"
$ git push heroku master
$ heroku open
```
# TO DO
## Homepage
