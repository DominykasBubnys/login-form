import { FC } from "react";
import { Text, View } from "react-native";
import Styles from "../styles/UserDetailsStyles";

interface Props{
  User: any,
  style?: object
}
const UserDetails: FC<Props> = ({User, style}) => {

  return <View style={Styles.root || style}>
      <Text style={Styles.text}>{User.firstName} {User.lastName}</Text>
      <Text style={Styles.text}>{User.address}</Text>
      <Text style={Styles.text}>{User.phone}</Text>
  </View>
};

export default UserDetails;
