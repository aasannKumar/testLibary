import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StyleProp, ViewStyle, TextStyle } from 'react-native';
 
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
 
const CustomRadioButton: React.FC<CustomRadioButtonProps> = ({
  selected,
  onSelect,
  disabled = false,
  label,
  containerStyle,
  radioStyle,
  innerCircleStyle,
  labelStyle,
}) => {
  const handlePress = () => {
    if (!disabled) {
      onSelect();
    }
  };
 
  return (
    <TouchableOpacity
      onPress={handlePress}
      disabled={disabled}
      style={[styles.container, containerStyle]}
    >
      <View style={[styles.radio, selected && styles.selected, radioStyle]}>
        {selected && <View style={[styles.innerCircle, innerCircleStyle]} />}
      </View>
      <Text style={[styles.label, disabled && styles.disabledLabel, labelStyle]}>{label}</Text>
    </TouchableOpacity>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  radio: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  selected: {
    borderColor: '#000',
  },
  innerCircle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#000',
  },
  label: {
    fontSize: 16,
    color: '#000',
  },
  disabledLabel: {
    color: 'gray',
  },
});
 
export default CustomRadioButton;