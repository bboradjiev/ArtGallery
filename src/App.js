import { BrowserRouter, Switch, Route } from "react-router-dom";
import Gallery from "./Components/Gallery";
import Header from "./Components/Header";
import Card from "./Components/Card";

import "./Scss/index.scss";
import data from "./data";

function App() {
   return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Gallery data={data} />
          </Route>
          <Route path="/image/:id" component={Card}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
