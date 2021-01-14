import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Contacts from './Pages/Contacts';
import Messages from './Pages/Messages';
import Products from './Pages/Products';


function App() {
  return (
    <>
      <Router>
        <Navbar/>
          <Switch>
            <Route path='/' exact component={Home}></Route>
            <Route path='/products' component={Products}></Route>
            <Route path='/messages' component={Messages}></Route>
            <Route path='/contacts' component={Contacts}></Route>
          </Switch>
      </Router>
    </>
  );
}

export default App;
