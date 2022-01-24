import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { InputStyles } from "../../styles/FormStyles";
import { useState } from "react";
import { FC } from "react";


interface Props{
    placeholder: string,
    onChangeText?: ((text: string) => void) | undefined,
    secured?: boolean,
    value?: string | undefined,
    type?:string
}

const Input: FC<Props> = props => {

    const commonInputArguments = {
        placeholder: props.placeholder,
        onChangeText: props.onChangeText,
        placeholderTextColor: "white",
        style: InputStyles.input,
        value: props.value,
    }

    const [showPassword, setShowPassword] = useState(false);
    const [securedPassword, setSecuredPassword] = useState<boolean|undefined>(props.secured);

    const pressIconHandler = () => {
        setShowPassword(!showPassword);
        setSecuredPassword(!securedPassword);
    }

    return <View style={InputStyles.container}>
        {   
            props.secured 
            
            ? 

            <View>
                <TextInput 
                    {...commonInputArguments}
                    secureTextEntry={securedPassword}
                />        
                {
                    commonInputArguments.value ? 
                    <TouchableOpacity onPress={pressIconHandler}>
                        <Text style={InputStyles.icon}>
                            {showPassword? "Hide" : "Show"}
                        </Text>
                    </TouchableOpacity> : null
                }
            </View>
            
            :
            
            <View>
                <TextInput 
                    {...commonInputArguments}
                />
            </View>
        }   
    </View>
}

export default Input;
