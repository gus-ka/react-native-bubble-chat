/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
  useColorScheme,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {SimpleRounded} from './src';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.white : Colors.white,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView style={backgroundStyle}>
        <View style={{alignItems: 'center', padding: 30}}>
          <SimpleRounded
            isSender={false}
            senderPoint="BOTTOM"
            recieverPoint="BOTTOM">
            <Text>{'Hello world!!!'}</Text>
          </SimpleRounded>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
