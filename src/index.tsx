import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Search from './components/Search';
import Article from './components/Article';
import { BrowserRouter as Router, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route path="/" exact component={App} />
      <Route path="/search/:query" exact component={Search} />
      <Route path="/article/:articleId" exact component={Article} />
      {/* <Route path="/login" component={Login} /> */}
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
