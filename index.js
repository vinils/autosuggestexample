/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';

AppRegistry.registerComponent("example", () => App);

if (typeof document !== 'undefined') {
  const rootTag = document.getElementById('root') || document.createElement('div');

  if (!rootTag.parentElement) {
    document.body.appendChild(rootTag);
  }

  AppRegistry.runApplication("example", {
    rootTag,
  });
}