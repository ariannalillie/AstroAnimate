import { Route, Switch } from "react-router-dom";
import Home from "./Componenets/Home"
import Level1 from "./Componenets/Level1";
import Level2 from "./Componenets/Level2";
import Level3 from "./Componenets/Level3";
import Level4 from "./Componenets/Level4";
import Level5 from "./Componenets/Level5";
import Level6 from "./Componenets/Level6";
import Level7 from "./Componenets/Level7";
import Level8 from "./Componenets/Level8";
import Level9 from "./Componenets/Level9";
import Level10 from "./Componenets/Level10";
import HowToPlay from "./Componenets/HowToPlay";


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
      <Route path="/level_4" >
        <Level4 />
      </Route>
      <Route path="/level_5" >
        <Level5 />
      </Route>
      <Route path="/level_6" >
        <Level6 />
      </Route>
      <Route path="/level_7" >
        <Level7 />
      </Route>
      <Route path="/level_8" >
        <Level8 />
      </Route>
      <Route path="/level_9" >
        <Level9 />
      </Route>
      <Route path="/level_10" >
        <Level10 />
      </Route>
    </>
  );
}

export default App;
