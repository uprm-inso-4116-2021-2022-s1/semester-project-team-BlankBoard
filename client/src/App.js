import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./views/Home";
import Login from "./views/Login";
import Register from "./views/Register";
import Error404 from "./views/Error404";
import "./App.css";
import { MuiThemeProvider, createTheme } from "@material-ui/core";

const theme = createTheme({
  typography: {
    fontFamily: ["Caveat Brush", "cursive", "Montserrat", "sans-serif"].join(
      ","
    ),
  },
});

function App() {
  return (
    <div>
      <MuiThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route path="*" component={Error404} />
          </Switch>
        </Router>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
