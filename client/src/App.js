import React from 'react'
import { Route, Switch } from 'react-router-dom'

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
  MoeServices,
  EditMoeProduit,
  EditMoeService
} from './pages'
import './App.css'
import ProtectedRoute from './components/ProtectedRoute'
import ProtectedRouteAdmin from './components/ProtectedRouteAdmin'
import { AdminProduits, AdminServices, AdminMoes, AdminLogin, AdminControl } from './pages/Admin'

function App() {
  return (
    <div className="App">
          <NavBar/>
          <Route path='/' component={Home} exact />
          <Route path='/signup' component={SignUp} />
          <Route path='/login' component={Login} />
          <Route path='/moe' component={Moes} />
          <Route path='/produits' component={Produits} />
          <Route path='/services' component={Services} />
          <Route path='/admin-login' component={AdminLogin} />

          <Switch>
            <ProtectedRouteAdmin path='/admin-control' component={AdminControl} />
            <ProtectedRouteAdmin path='/admin-moes' component={AdminMoes} />
            <ProtectedRouteAdmin path='/admin-produits' component={AdminProduits} />
            <ProtectedRouteAdmin path='/admin-services' component={AdminServices} />
          </Switch>

          <Switch>
              <ProtectedRoute path='/profil' component={Profil} />
              <ProtectedRoute path='/mes-produits' component={MoeProduits} />
              <ProtectedRoute path='/mes-services' component={MoeServices} />
              <ProtectedRoute path='/edit-mes-produits' component={EditMoeProduit} />
              <ProtectedRoute path='/edit-mes-services' component={EditMoeService} />
              <ProtectedRoute path='/edit-moe' component={EditMoe} />
          </Switch>
    </div>
  );
}

export default App;
