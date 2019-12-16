import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header, {NavBar} from './header.js';
import ArticleBar from './article-bar.js';
//import NavBar from './nav-bar.js';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<ArticleBar />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
 