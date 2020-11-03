import React from 'react'
import {BrowserRouter as Router , Switch ,Route } from 'react-router-dom';
import {Home} from './Components/Home';
import {AddVendor} from './Components/AddVendor';
import {EditVendor} from './Components/EditVendor';
import 'bootstrap/dist/css/bootstrap.min.css';


 const App = () => {
  return (
  <div style={{margin:"0 auto", width:"90%"}}>

    <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/add" component={AddVendor} />
      <Route path="/edit/:id" component={EditVendor} />
    </Switch>
    </Router>
    
  </div>
  )
}
export default App;