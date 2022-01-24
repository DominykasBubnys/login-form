import { Alert, ImageBackground, Text, View } from "react-native";
import { useState, useEffect } from "react";
import Styles from "../styles/AvatarStyles";
import LoadingSpinner from "./LoadingSpinner";
import { FC } from "react";



interface Props{
  source: any,
  style?: object,
  blurRadius?: number
}

const Avatar: FC<Props> = props => {

    const [isLoading, setIsLoading] = useState(false);

    const imageUrl = props.source;

    useEffect(() => {

      const fetchImage = async () => {

        try {

          setIsLoading(true);
          const response = await fetch(imageUrl);

        
          if(!response.ok){
            throw new Error("OOOPS! Cannot upload image.. Please check your network!");
          }
          setIsLoading(false);


        } catch (error: any) {
            Alert.alert(error.message);
        }

      }

      fetchImage();

    }, [])


    return (
        <View style = {{ ...Styles.avatar, ...props.style }}>
            {isLoading? 
                <LoadingSpinner/> 
                : 
                <ImageBackground 
                    blurRadius = { 1 || props.blurRadius } 
                    source = { {uri: imageUrl || props.source } } 
                    style = { Styles.image || props.style }
                />
            }

        </View>
    );
  };
  
  export default Avatar;