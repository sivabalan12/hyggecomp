import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const CustomButton = ({
  title,
  onPress = () => {},
  containerStyle,
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={onPress}>
      <Text style={[{padding: 20, textAlign: 'center'}]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({container: {backgroundColor: 'yellow'}});

export {CustomButton};
