import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import BreadDetailScreen from '../screens/BreadDetailScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryBreadScreen from '../screens/CategoryBreadScreen';

const Stack = createStackNavigator();
const ShopNavigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName = "Home">
            <Stack.Screen name ="Home" component = {CategoriesScreen} ></Stack.Screen>
            <Stack.Screen name ="List" component = {CategoryBreadScreen} ></Stack.Screen>
            <Stack.Screen name ="Detail" component = {BreadDetailScreen} ></Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default ShopNavigator

const styles = StyleSheet.create({})