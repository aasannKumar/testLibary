import React from 'react';
import { StyleProp, ViewStyle, TextStyle } from 'react-native';
interface CustomRadioButtonProps {
    selected: boolean;
    onSelect: () => void;
    disabled?: boolean;
    label: string;
    containerStyle?: StyleProp<ViewStyle>;
    radioStyle?: StyleProp<ViewStyle>;
    innerCircleStyle?: StyleProp<ViewStyle>;
    labelStyle?: StyleProp<TextStyle>;
}
declare const CustomRadioButton: React.FC<CustomRadioButtonProps>;
export default CustomRadioButton;
