import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Container } from 'reactstrap'

import { NavBar } from './components'
import {
  Home, 
  Login, 
  Produits, 
  Moes, 
  Services,
  SignUp,
  EditMoe,  
  Profil, 
  MoeProduits, 
  MoeServices
} from './pages'
import './App.css';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <div className="App">
      <Container>
          <NavBar/>
          <Route path='/' component={Home} exact />
          <Route path='/signup' component={SignUp} />
          <Route path='/login' component={Login} />
          <Route path='/moe' component={Moes} />
          <Route path='/produits' component={Produits} />
          <Route path='/services' component={Services} />

          <Switch>
              <ProtectedRoute path='/profil' component={Profil} />
              <ProtectedRoute path='/mes-produits' component={MoeProduits} />
              <ProtectedRoute path='/mes-services' component={MoeServices} />
              <ProtectedRoute path='/edit-moe' component={EditMoe} />
          </Switch>
      </Container>
    </div>
  );
}

export default App;
