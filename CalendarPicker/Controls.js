import React from 'react';
import {
    TouchableOpacity,
    Text,
} from 'react-native';
import PropTypes from 'prop-types';

export default function Controls({styles, textStyles, label, onPressControl, containerStyle}) {
    let component;
    if (typeof label === 'function') {
        component = label();
    } else {
      component = <Text style={[styles, textStyles]}>{label}</Text>;
    }

    return (
        <TouchableOpacity onPress={() => onPressControl()} style={containerStyle}>
            {component}
        </TouchableOpacity>
    );
}

Controls.propTypes = {
    styles: PropTypes.array.isRequired,
    label: PropTypes.string.isRequired,
    onPressControl: PropTypes.func.isRequired,
};
