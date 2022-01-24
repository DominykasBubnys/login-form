import { View } from "react-native";
import Styles from "../styles/HeaderStyles";
import Button from "./formElements/Button";
import { useContext } from "react";
import { UserContext } from "./context/UserContext";
import { FC } from "react";


const Header: FC= (props) => {

  const User = useContext(UserContext)

  const logoutBtnHandler = () => {
    if(User){
      User.logout();
      User.userNavigation.navigate("Login")
    }

  }

  return (
    <View style={Styles.container}>
      {User.isLogedIn && <Button style={Styles.button} title="Logout" onPress={logoutBtnHandler} />}
    </View>
  )
};

export default Header;
