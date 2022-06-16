import React from 'react';
import { Button } from 'react-native-paper';

const HyggeButton = ({
  title,
  onPress = () => {},
  style,
  mode,
  icon,
  labelStyle,
}) => {
  return (
    <Button style={[style]} icon={icon} mode={mode} onPress={onPress} uppercase={false} labelStyle={labelStyle}>
      {title}
    </Button>
  );
};

export {HyggeButton};
