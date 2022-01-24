import { View, Alert } from "react-native"
import Styles from "../styles/HomeScreenStyles";
import Button from "../components/formElements/Button";
import Input from "../components/formElements/Input";
import Avatar from "../components/Avatar";
import LoadingSpinner from "../components/LoadingSpinner";
import { UserContext } from "../components/context/UserContext";
import { useContext, FC, useState} from "react";
import { useEffect } from "react";

interface Props{
    navigation: any,
}

const Login: FC<Props> = (props) => {

    const [username, setUsername] = useState<string | undefined>(undefined);
    const [password, setPassword] = useState<string | undefined>(undefined);
    const [disabledButton, setDisabledButton] = useState<boolean>(true);
    const [isLoading, setIsLoading] = useState(false);
    const User = useContext(UserContext);

    const userNameChangeHandler = (value: string) => {
        setUsername(value);
    }

    const passswordChangeHandler = (value: string) => {
        setPassword(value);
    }

    useEffect(() => {
        if(username && password) {
            setDisabledButton(false);
        }
        else setDisabledButton(true);

    }, [username, password, disabledButton])

    const submitHandler = async() => {
        try {
            setIsLoading(true);
            const response = await fetch("https://vidqjclbhmef.herokuapp.com/credentials",
            {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  username,
                  password
                })
            })
    
            const credentialsData = await response.json();

            if(!response.ok){
                throw new Error("Wrong credentials! Please try again");
            }

            const responseUser = await fetch("https://vidqjclbhmef.herokuapp.com/user", {
                headers: {
                    "Authorization": credentialsData.token,
                }
            });

            if(!responseUser.ok){
                throw new Error("Error fetching user...");
            }

            const userData = await responseUser.json();
            User.login(userData);
            User.setUserNavigation(props.navigation);

            props.navigation.navigate("Details");

            
        } catch (error: any) {
            Alert.alert(error.message);
        }
        setIsLoading(false);
        setUsername(undefined),
        setPassword(undefined);
        
    }

    return (
        <View style={Styles.container}>
            {isLoading ? <LoadingSpinner /> : 
                <View>
                    <Avatar source="https://placeimg.com/80/80/tech" />
                    <View style={Styles.form}>
                        <Input value={username} placeholder="Enter user name" onChangeText={userNameChangeHandler} />
                        <Input value={password} secured={true} type="password" placeholder="Enter password" onChangeText={passswordChangeHandler} />
                        <Button disabled={disabledButton} title="Submit" onPress={submitHandler}/>
                    </View>
                </View>
            }
        </View>
    )
}           

export default Login;
