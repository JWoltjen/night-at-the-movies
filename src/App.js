import './App.css';
import React from 'react' 
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import PageNotFound from './components/PageNotFound'
import Home from './components/Home'
import MovieDetail from './components/MovieDetail'

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/movie/:imdbID" component={MovieDetail}/>
            <Route component={PageNotFound}/>
        </Switch>
        
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
