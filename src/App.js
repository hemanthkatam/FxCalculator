import React from 'react';
import './App.css';
import FxCalculator from '../src/Components/FxCalculator';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import fxReducer from '../src/Container/FxCalReducer';

const store = createStore(fxReducer);
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <FxCalculator />
      </div>
    </Provider>

  );
}

export default App;
