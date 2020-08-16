import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';

import { Navigation as RootNavigation } from '../navigations';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <RootNavigation />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
