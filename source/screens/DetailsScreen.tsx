import { View } from "react-native"
import UserDetails from "../components/UserDetails"
import Avatar from "../components/Avatar";
import { UserContext } from "../components/context/UserContext";
import { useContext, FC } from "react";


const DetailsScreen:FC  = () => {
    
    const User = useContext(UserContext);

    return <View>
        
        <Avatar source="https://placeimg.com/80/80/tech" style={{width: "80%", height: "50%"}}/>
        <UserDetails User={User.user} />

    </View>
}

export default DetailsScreen;