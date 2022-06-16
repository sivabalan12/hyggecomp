
import React from 'react';import { ProgressBar } from 'react-native-paper';

import { View, StyleSheet } from 'react-native';
import { HyggeColors } from './../theme/colors';


const HyggeProgressBar = ({
  progress,
  containerStyle,
  color=HyggeColors.primaryButton
}) => {
  return (
    <View style={[styles.progressBarMargin, containerStyle]}>
    <ProgressBar progress={progress} color={color}/>
    </View>
  );
};

const styles = StyleSheet.create({
  progressBarMargin: { marginHorizontal: 20},
})
export { HyggeProgressBar };

