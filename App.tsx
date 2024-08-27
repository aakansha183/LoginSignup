import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './src/Screens/ScreenHome/Redux/store';
import MainNavigator from './src/Routes/AppRouter';
import messaging from '@react-native-firebase/messaging';

const App: React.FC = () => {
  
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
};

export default App;
