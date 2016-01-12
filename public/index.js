import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute } from 'react-router'
import { createHistory } from 'history'
import App from './container/App/index'
import MainSection from './component/MainSection/index.jsx!'
import AboutSection from './component/AboutSection/index.jsx!'
import FeatureSection from './component/FeatureSection/index.jsx!'

const history = createHistory()


ReactDOM.render((
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={MainSection} />
      <Route path="feature" component={FeatureSection} />
      <Route path="about" component={AboutSection} />
    </Route>
  </Router>), document.getElementById('main'))
