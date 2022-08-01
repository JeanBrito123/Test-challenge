import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore  from './redux'
import rootSaga from './redux/sagas'
import Views from './views/index'

const { store, persistor, sagaMiddleware } = configureStore();
sagaMiddleware.run(rootSaga); // saga

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Views />
      </PersistGate>
    </Provider>
  );
}

export default App;