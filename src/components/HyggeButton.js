import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
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

const styles = StyleSheet.create({container: {backgroundColor: 'yellow'}});

export {HyggeButton};
