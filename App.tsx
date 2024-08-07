import React from 'react';
import { Provider } from 'react-redux';
import store from './src/Redux/store';
import MainNavigator from './src/Routes/AppRouter';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
};

export default App;
