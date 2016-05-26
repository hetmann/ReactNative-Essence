/**
 * Essence Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Main = require('./App/Pages/Main');

var {
  AppRegistry,
  NavigatorIOS,
} = React;

class EssenceNative extends React.Component{
  render() {
    return (
      <NavigatorIOS
        ref="EssenceNavigation"
        style={{flex: 1}}
        initialRoute={{
          title: '',
          component: Main
      }}/>
    );
  }
};

AppRegistry.registerComponent('EssenceNative', () => EssenceNative);
