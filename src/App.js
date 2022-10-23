import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home  from './components/Home';
import AddContact from './components/AddContact';
import EditContact from './components/EditContact';
import { GlobalProvider } from './context/GlobalState';



function App() {
  return (
    
    <div style={{maxWidth: "30rem", margin: "4rem auto"}}>
      <GlobalProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/add" component={AddContact} />
            <Route path="/edit/:id" component={EditContact} />
          </Switch>
        </Router>
      </GlobalProvider>
    </div>
  );
}

export default App;
