import React from 'react';
import {Text, View} from 'react-native';
import App from './pages/App';

function Main(): React.JSX.Element {
  return (
    <View>
      <Text>Hello World</Text>
      <App />
    </View>
  );
}

export default React.memo(Main);
