import React from 'react';
import {Route, Switch} from 'react-router-dom'

import {NavBar} from './components'
import {Home,Login, Produits, Moe, Services, SignUp, Profil, MoeProduits, MoeServices} from './pages'
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
          <Route path='/produits' component={Produits} exact />
          <Route path='/services' component={Services} exact />

          <Switch>
              <ProtectedRoute path='/profil' component={Profil} exact />
              <ProtectedRoute path='/mes-produits' component={MoeProduits} exact />
              <ProtectedRoute path='/mes-services' component={MoeServices} exact />
          </Switch>
      </Container>
    </div>
  );
}

export default App;
