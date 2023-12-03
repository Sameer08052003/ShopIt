import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import SplashScreen from './Screens/SplashScreen';
// import ProductList from './Components/gridItem';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import ListItem from './Components/listItem';

import ProductDetail from './Screens/productDetailPage';
import ProductList from './Screens/productListPage';

const App = () => {
  const Stack = createNativeStackNavigator();
  const [isSplash, setIsSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsSplash(false);
    }, 3000);
  });

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        {isSplash && (
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{headerShown: false}}
          />
        )}
        <Stack.Screen
          name="ProductListPage"
          component={ProductList}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="ProductDetailPage"
          component={ProductDetail}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
