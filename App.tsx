import MainNav from './source/routes/MainRouter';
import { ImageBackground, Keyboard, Text, TouchableWithoutFeedback, View } from 'react-native';
import Styles from './source/styles/AppStyles';
import Header from './source/components/Header';
import {UserContext} from "./source/components/context/UserContext";
import { useState, useCallback } from 'react';
import { FC } from 'react';

const App:FC = () => {

  const [isLogedIn, setIsLogedIn] = useState<boolean>(false);
  const [user, setUser] = useState<object | null>(null);
  const [userNavigation, setUserNavigation] = useState<object | null>(null);
  
  const backgroundImage_Url = "./assets/react-native_form.jpg";

  const keyboardHandler = () => {
    Keyboard.dismiss();
  }

  const navigationHandler = useCallback((navProp:object | null):void => {
    setUserNavigation(navProp);
  }, [])

  const loginHandler = useCallback((author:object | null):void => {
    setIsLogedIn(true);
    setUser(author);
  },[])

  const logoutHandler = useCallback(():any => {
    setIsLogedIn(false);
    setUser(null);
  },[])

  

  return (

    <UserContext.Provider value={
      {
        isLogedIn, 
        login: loginHandler, 
        logout: logoutHandler, 
        setUserNavigation: navigationHandler, 
        userNavigation,
        user,
      }
    }>
      <TouchableWithoutFeedback onPress={keyboardHandler}>

          <View style={Styles.container}>

            <ImageBackground source={require(backgroundImage_Url)} style={Styles.image} >

              <Header />

              <MainNav />

            </ImageBackground >

          </View>


      </TouchableWithoutFeedback>
    </ UserContext.Provider>

  );
}

export default App;