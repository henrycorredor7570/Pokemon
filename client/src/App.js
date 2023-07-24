import { Route, useLocation } from "react-router-dom";
import { Home, Form, Detail, Landing, NavBar } from "./views/imports"

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar/>}
      <Route exact path="/" render={() => <Landing/>}/>
      <Route path="/home" render={() => <Home/>}/>
      <Route path="/detail/:id" render={() => <Detail/>}/>
      <Route path="/create" render={() => <Form/>}/>
    </div>
  );
}

export default App;


