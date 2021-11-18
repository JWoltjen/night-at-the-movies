import './App.css';
import React from 'react' 
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import PageNotFound from './components/PageNotFound'
import Home from './components/Home'
import MovieDetail from './components/MovieDetail'
import styled from 'styled-components'

const Container = styled.div`
  margin: 0px 4px; 
`
function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
      <Container>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/movie/:imdbID" component={MovieDetail}/>
            <Route component={PageNotFound}/>
        </Switch>
      </Container>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
