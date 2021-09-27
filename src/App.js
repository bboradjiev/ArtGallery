import { BrowserRouter, Switch, Route } from "react-router-dom";
import Gallery from "./Components/Gallery";
import Header from "./Components/Header";
import Card from "./Components/Card";
import { useState } from "react";

import "./Scss/index.scss";
import data from "./data";

function App() {
  let [start, setStart] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <Header start={start} setStart={setStart}/>
        <Switch>
          <Route exact path="/">
            <Gallery data={data} start={start} setStart={setStart}  />
          </Route>
          <Route path="/image/:id" component={Card} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
