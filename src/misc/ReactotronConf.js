import Reactotron, { asyncStorage } from 'reactotron-react-native';

Reactotron
  .setAsyncStorageHandler(asyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
  .configure() // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .connect() // let's connect!
