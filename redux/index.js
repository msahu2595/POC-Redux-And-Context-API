import React from 'react';
import {Text} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './store';
import Todo from './Todo';

const App = () => (
  <Provider store={store}>
    <Text style={{fontSize: 16, padding: 8}}>Using Redux with Thunk:</Text>
    <Todo />
  </Provider>
);

export default App;
