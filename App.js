import React, { Component } from 'react';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import OtherScreen from './src/screens/OtherScreen';
import LoginScreen from './src/screens/LoginScreen';
import AuthLoadingScreen from './src/screens/AuthLoadingScreen';
import { Root } from 'native-base';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import CreateNewAccountScreen from './src/account/CreateNewAccountScreen';
import AccountReducer from "./src/account/AccountReducer";
import ReduxStore from './src/misc/ReduxStore';


const AppStack = createStackNavigator({ Home: HomeScreen, Other: OtherScreen, CreateNewAccount: CreateNewAccountScreen });
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
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
    ReduxStore.registerReducer("accountReducer", AccountReducer);
  }
  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <Provider store={ReduxStore.store}>
        <Root>
          <AppNavigator />
        </Root>
      </Provider>
    );
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }
}
