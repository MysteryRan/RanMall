/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Navigator from './src/navigation/Navigator'

AppRegistry.registerComponent(appName, () => Navigator);
