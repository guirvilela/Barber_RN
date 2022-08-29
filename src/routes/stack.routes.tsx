import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import BaseView from '../bases/BaseView';
import Login from '../pages/Login';

const Stack = createNativeStackNavigator();

const StackRoutes: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login">
        {props => <BaseView {...props} component={<Login />} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default StackRoutes;
