import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';

import { RootNavigation } from '../navigations';
import store from './store';
import GlobalError from '../components/GlobalError';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.safeView}>
        <GlobalError />
        <RootNavigation />
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
  },
});

export default App;
