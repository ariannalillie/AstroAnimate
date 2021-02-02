import { Route, Switch } from "react-router-dom";
import Home from "./Componenets/Home"

function App() {
  return (
    <Route exact path="/" >
    <Home />
  </Route>
  );
}

export default App;
