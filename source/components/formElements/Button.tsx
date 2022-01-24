import { FC } from 'react';
import { Text, Pressable } from 'react-native';
import { ButtonStyles } from '../../styles/FormStyles';

interface Props{
  style?: object,
  onPress?: any,
  title?: string,
  disabled?: boolean
}


const Button: FC<Props> = (props) => {

  const { onPress, title, disabled } = props;
  return (
    <Pressable style={[ButtonStyles.button, disabled? ButtonStyles.disabled : null, props.style]} onPress={() => {
      if(!disabled) return onPress()
      return;
    }}>
      <Text style={ButtonStyles.text}>{title}</Text>
    </Pressable>
  );
}

export default Button;
