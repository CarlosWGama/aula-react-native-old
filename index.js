import 'expo/build/Expo.fx';
import registerRootComponent from 'expo/build/launch/registerRootComponent';
import { activateKeepAwake } from 'expo-keep-awake';

import navigation from './src/navigations/index';
import { firebaseConfig } from './src/config/firebase';
import * as firebase from 'firebase'

firebase.initializeApp(firebaseConfig)

if (__DEV__) {
  activateKeepAwake();
}

registerRootComponent(navigation);
