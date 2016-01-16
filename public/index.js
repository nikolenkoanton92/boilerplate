import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute } from 'react-router'
import { createHistory } from 'history'
import App from './container/App/index'
import IndexPage from './page/Index/index.jsx!'
import AboutPage from './page/About/index.jsx!'
import FeaturePage from './page/Feature/index.jsx!'
import 'bootstrap/css/bootstrap.css!'
const history = createHistory()

ReactDOM.render((
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={IndexPage} />
      <Route path="feature" component={FeaturePage} />
      <Route path="about" component={AboutPage} />
    </Route>
  </Router>), document.getElementById('main'))
