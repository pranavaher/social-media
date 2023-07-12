# social-media
## File structure
#### `client` - Holds the client application
- #### `public` - This holds all of our static files
- #### `src`
    - #### `assets` - This folder holds assets such as images, docs, and fonts
    - #### `components` - This folder holds all of the different components that will make up our views such as left and right bar, navbar, post, comment, story.
    - #### `context` - This folder contains custom contexts created for authorization and dark mode.
    - #### `pages` - This folder contains home login profile register page jsx and corresponding scss.
    - #### `App.js` - This is what renders all of our browser routes and different views
    - #### `index.js` - This is what renders the react app by rendering App.js, should not change
- #### `package.json` - Defines npm behaviors and packages for the client
#### `api` - Holds the server application
- #### `config` - This holds our configuration files, like mongoDB uri
- #### `controllers` - These hold all of the callback functions that each route will call
- #### `routes` - This holds all of our HTTP to URL path associations for each unique url
- #### `index.js` - Entry point of application
- #### `connect.js` - Defines DB connection for MYSQL
#### `package.json` - Defines npm behaviors like the scripts defined in the next section of the README
#### `.gitignore` - Tells git which files to ignore
#### `README` - This file!
