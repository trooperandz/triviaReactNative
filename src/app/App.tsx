import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';

import { RootNavigation } from '../navigations';
import store from './store';
import GlobalError from '../components/GlobalError';

const App = () => {
  return (
    <Provider store={store}>
      <GlobalError />
      <RootNavigation />
    </Provider>
  );
};

export default App;
