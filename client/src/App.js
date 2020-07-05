import React from 'react';
import {Route} from 'react-router-dom'

import {NavBar} from './components'
import {Home,Login, Produit, Moe, Service} from './pages'
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Route path='/' component={Home} exact />
      <Route path='/login' component={Login} exact />
      <Route path='/moe' component={Moe} exact />
      <Route path='/produit' component={Produit} exact />
      <Route path='/service' component={Service} exact />
     
    </div>
  );
}

export default App;
