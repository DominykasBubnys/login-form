import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text } from 'react-native';
import LoginScreen from "../screens/HomeScreen";
import UserDetailsScreen from "../screens/DetailsScreen";
import { FC } from 'react';


const Stack = createNativeStackNavigator();

const HomeStack: FC = () => {

    const MyTheme = {
        dark: false,
        colors: {
          primary: 'red',
          card: 'rgba(78, 78, 78, 0.9)',
          text: 'rgb(28, 28, 30)',
          backgroundColor: "black",
          notification: 'rgb(255, 69, 58)',
          opacity: "0",
          color: "red"
        },
      };

    return <NavigationContainer theme={MyTheme}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Details" component={UserDetailsScreen} />
        </Stack.Navigator>
    </NavigationContainer>
}

export default HomeStack