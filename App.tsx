/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable quotes */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import NavigationHandler from "./NavigationHandler";
import { store , persistor } from './store/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationHandler/>
      </PersistGate>
    </Provider>
  );
}

export default App;