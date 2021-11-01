import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './views/Home';
import Login from './views/Login';
import Register from './views/Register';
import Settings from './views/Settings';
import Error404 from './views/Error404';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/settings" component={Settings} />
          <Route path="*" component={Error404} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
