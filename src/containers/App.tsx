import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';

import { Navigation as NavigationContainer } from '../navigation';
import { configureStore } from 'redux/store';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <NavigationContainer />
  </Provider>
);

export default App;
