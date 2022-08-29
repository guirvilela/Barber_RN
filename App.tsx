import React from 'react';
import {StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components';
import Routes from './src/routes/routes';
import theme from './src/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        backgroundColor={theme.colors.background}
        barStyle="light-content"
      />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
