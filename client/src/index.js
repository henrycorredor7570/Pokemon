import React from 'react';
import ReactDOM from 'react-dom';
import store from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from './App';

ReactDOM.render(
  <Provider store={store}>{/* me sirve para que este conectado con la aplicacion de react (conecta react con el store*/}
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>,    
  document.getElementById('root')
);