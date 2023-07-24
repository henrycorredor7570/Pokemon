import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.render(
  <Provider store={store}>{/* me sirve para que este conectado con la aplicacion de react (conecta react con el store*/}
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>,    
  document.getElementById('root')
);

/* const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
) */ 