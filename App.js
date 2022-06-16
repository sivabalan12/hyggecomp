import React from 'react';
import { View, StyleSheet } from 'react-native';
import {HyggeButton} from './src/components/HyggeButton';
import {HyggeProgressBar} from './src/components/HyggeProgressBar';
import {HyggeColors} from './src/theme/colors';

const YourApp = () => {
  return (
    <View style={styles.container}>
      <HyggeProgressBar
        progress={0.5}
      />
      <View style={styles.marginSpace}></View>
      <HyggeButton
        title="Start"
        style={styles.hyggeButton}
        mode="contained"
        labelStyle={styles.buttonPadding}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1, 
    justifyContent: 'center'
  },
  marginSpace:{
    margin: 10
  },
  hyggeButton: {
    backgroundColor: HyggeColors.primaryButton,
    width: '50%',
    borderRadius: 30,
    elevation: 0,
  },
  buttonPadding: {
    paddingVertical: 5,
  },
});
export default YourApp;
