import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import { Button, ProgressBar,} from 'react-native-paper';


const HyggeProgressBar = ({
  progress,
  color
}) => {
  return (
    <ProgressBar progress={progress} color={color}/>
  );
};

const styles = StyleSheet.create({container: {backgroundColor: 'yellow'}});

export {HyggeProgressBar};
