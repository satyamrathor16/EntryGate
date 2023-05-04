import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import Container from './src/Container';
import Main from './src/navigation/Main';
import { MenuProvider } from 'react-native-popup-menu';
import Store from './src/store'
import { Provider } from 'react-redux'

const App = () => {
  return (
    <MenuProvider>
      <Provider store={Store}>
        <Container>
          <Main />
        </Container>
      </Provider>
    </MenuProvider>
  );
};


export default App;
