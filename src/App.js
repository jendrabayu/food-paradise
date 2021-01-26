import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import City from './pages/City'
import RestaurantDetail from './pages/RestaurantDetail'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends React.Component {
  constructor() {
    super()
  }


  render() {
    return (
      <Router>
        <Navbar />
        <Route path="/" exact component={Home} />
        <Route path="/city/:city_id" component={City} />
        <Route path="/restaurant/:restaurant_id" component={RestaurantDetail} />
        <Footer />
      </Router>
    );
  }
}

export default App;
