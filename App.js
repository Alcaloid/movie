import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SearchScreen, ResultScreen, MovieDetailScreen} from './src/screen';
import {store, persistor} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';

const Stack = createStackNavigator();
function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={SearchScreen}
          options={{
            title: '',
          }}
        />
        <Stack.Screen
          name="Result"
          component={ResultScreen}
          options={{
            title: '',
            headerBackTitle: 'Back',
          }}
        />
        <Stack.Screen
          name="Detail"
          component={MovieDetailScreen}
          options={{
            title: '',
            headerBackTitle: 'Back',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MyStack />
      </PersistGate>
    </Provider> 
  );
};

export default App;
