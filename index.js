import 'expo/build/Expo.fx';
import registerRootComponent from 'expo/build/launch/registerRootComponent';
import { activateKeepAwake } from 'expo-keep-awake';

import LoginScreen from './src/screen/login';

if (__DEV__) {
  activateKeepAwake();
}

registerRootComponent(LoginScreen);
