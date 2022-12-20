
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IBGE from './screens/IBGE/index';
import InfoCidade from './screens/InfoCidade/index';


const Stack = createStackNavigator();
const options = {
  headerShown: false
}
  
function App() {
  return (
    <View style={styles.wrap}>
        <Stack.Navigator initialRouteName='IBGE'>
            <Stack.Screen name="IBGE" component={IBGE} options={options} />                     
            <Stack.Screen name="InfoCidade" component={InfoCidade} options={options} />                     
                                                          
        </Stack.Navigator>       
    </View>
  );
}

export default () => {
    return (
        <NavigationContainer>
          <App />
        </NavigationContainer>
    );
};


const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: '#F3BF09',
  },
});
