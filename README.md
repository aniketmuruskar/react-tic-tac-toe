# react-tic-tac-toe

This repository demonstrates the simple tic tac toe game using react


## Prerequisites

#### Clone `react-tic-tac-toe`

```
git clone https://github.com/aniketmuruskar/react-tic-tac-toe.git
cd react-tic-tac-toe
```

### Node.js and Tools

* Get [Node.js][node-download].
* Install the tool dependencies: `npm install`


### Running the Application during Development

* Run `npm start`.
* Navigate your browser to [http://localhost:8000/](http://localhost:8000/) to see the application running.


## Workings of the Application

* The app is having only single page  i.e `index.html` in public folder.
* This app using webpack development server i.e webpack-dev-server serve content from dist directory (root).
* This app using webpack as a module bundler to generate static assets, transpile ES6 to ES5. More [webpack][webpack]
* You can change port number for app by changing `devServer.port` in `webpack.config.js` config file


## Resources

For more information on React.js please check out [react.js][reactjs].

[git-home]: https://git-scm.com
[git-setup]: https://help.github.com/articles/set-up-git/
[node-download]: https://nodejs.org/en/download/package-manager/
[reactjs]: https://facebook.github.io/react/
[webpack]: https://webpack.js.org/