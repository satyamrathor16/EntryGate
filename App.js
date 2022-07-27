import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import Container from './src/Container';
import Main from './src/navigation/Main';
import { MenuProvider } from 'react-native-popup-menu';

const App = () => {
  return (
    <MenuProvider>
      <Container>
        <Main />
      </Container>
    </MenuProvider>
  );
};


export default App;
