import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
var CustomRadioButton = function (_a) {
    var selected = _a.selected, onSelect = _a.onSelect, _b = _a.disabled, disabled = _b === void 0 ? false : _b, label = _a.label, containerStyle = _a.containerStyle, radioStyle = _a.radioStyle, innerCircleStyle = _a.innerCircleStyle, labelStyle = _a.labelStyle;
    var handlePress = function () {
        if (!disabled) {
            onSelect();
        }
    };
    return (React.createElement(TouchableOpacity, { onPress: handlePress, disabled: disabled, style: [styles.container, containerStyle] },
        React.createElement(View, { style: [styles.radio, selected && styles.selected, radioStyle] }, selected && React.createElement(View, { style: [styles.innerCircle, innerCircleStyle] })),
        React.createElement(Text, { style: [styles.label, disabled && styles.disabledLabel, labelStyle] }, label)));
};
var styles = StyleSheet.create({
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
