import React, { Component } from "react";
import "./App.css";
import Main from "./Main";
import { BrowserRouter } from "react-router-dom";
// import { CookiesProvider } from 'react-cookie';
import { Provider } from "react-redux";
import storeAndPersistor from "./reduxConfig/store";
// import persistor from './reduxConfig/store'

import { PersistGate } from "redux-persist/integration/react";

const { store } = storeAndPersistor;
const { persistor } = storeAndPersistor;

//App Component
class App extends Component {
  render() {
    return (
      //Use Browser Router to route to different pages
      // <CookiesProvider>
      <Provider store={store}>
        <BrowserRouter>
          <PersistGate persistor={persistor}>
            <Main />
          </PersistGate>
        </BrowserRouter>
      </Provider>

      // </CookiesProvider>
    );
  }
}
//Export the App component so that it can be used in index.js
export default App;
