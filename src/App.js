import React from 'react';
import Navbar from './components/layout/Navbar';
import { BrowserRouter, Switch ,Route} from 'react-router-dom';
import DashBoard from './components/dashboard/Dasnboard'
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Book from './components/projects/Book'
import About from './components/projects/About'
import Service from './components/projects/Service'

function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/' component={DashBoard} />
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
          <Route path='/book' component={Book} />
          <Route path='/about' component={About} />
          <Route path='/service' component={Service} />
         </Switch>
    </BrowserRouter>
    
  );
}

export default App;
