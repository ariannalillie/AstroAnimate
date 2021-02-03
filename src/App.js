import { Route, Switch } from "react-router-dom";
import Home from "./Componenets/Home"
import Level1 from "./Componenets/Level1";
import Level2 from "./Componenets/Level2";
import Level3 from "./Componenets/Level3";

function App() {
  return (
    <>
    <Route exact path="/" >
    <Home />
  </Route>
      <Route path="/level_1" >
      <Level1 />
    </Route>
    <Route path="/level_2" >
      <Level2 />
    </Route>
    <Route path="/level_3" >
      <Level3 />
    </Route>
    </>
  );
}

export default App;
