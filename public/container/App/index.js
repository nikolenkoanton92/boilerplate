import React from 'react'
import Navbar from '../../component/Navbar/index.jsx!'
import Footer from '../../component/Footer/index.jsx!'

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <h1>My JSPM - Reactjs Boilerplate</h1>
        {this.props.children}
        <Footer />
      </div>
      )
  }
}

export default App
