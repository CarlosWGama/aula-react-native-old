import 'expo/build/Expo.fx';
import registerRootComponent from 'expo/build/launch/registerRootComponent';
import { activateKeepAwake } from 'expo-keep-awake';

import navigation from './src/navigations/index';

if (__DEV__) {
  activateKeepAwake();
}

registerRootComponent(navigation);
