import React, {Component} from 'react';
import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import OtherScreen from './src/screens/OtherScreen';
import LoginScreen from './src/screens/LoginScreen';
import AuthLoadingScreen from './src/screens/AuthLoadingScreen';


const AppStack = createStackNavigator({ Home: HomeScreen, Other: OtherScreen });
const AuthStack = createStackNavigator({ Login: LoginScreen });

const AppNavigator = createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));

export default class App extends Component {
  render() {
    return (<AppNavigator />);
  }
}
