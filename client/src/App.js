import React from 'react';
import {Route, Switch} from 'react-router-dom'

import {NavBar} from './components'
import {Home,Login, Produit, Moe, Service, SignUp} from './pages'
import './App.css';
import { Container } from 'reactstrap';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <div className="App">
      <Container>
          <NavBar/>
          <Route path='/' component={Home} exact />
          <Route path='/signup' component={SignUp} />
          <Route path='/login' component={Login} />
          <Route path='/moe' component={Moe} exact />
          <Switch>
              <ProtectedRoute path='/produits' component={Produit} exact />
              <ProtectedRoute path='/services' component={Service} exact />
          </Switch>
      </Container>
    </div>
  );
}

export default App;
