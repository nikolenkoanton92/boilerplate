import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, Link } from 'react-router'
import { createHistory } from 'history'

const history = createHistory()

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>App</h1>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/inbox">Inbox</Link></li>
        </ul>
        {this.props.children}
      </div>
      )
  }
}

class Home extends React.Component {
  render() {
    return (
      <div><h2>Hello Home Page</h2></div>)
  }
}

class About extends React.Component {
  render() {
    return (
      <div><h2>Hello About Page</h2></div>
      )
  }
}

class Inbox extends React.Component {
  render() {
    return (
      <div><h2>Hello Inbox Page</h2></div>
      )
  }
}

ReactDOM.render((
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="about" component={About} />
      <Route path="inbox" component={Inbox} />
    </Route>
  </Router>), document.getElementById('main'))
