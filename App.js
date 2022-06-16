import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {CustomButton} from './src/components/CustomButton'
import { HyggeButton } from './src/components/HyggeButton';
import { HyggeProgressBar } from './src/components/HyggeProgressBar';
import { HyggeColors } from './src/theme/colors';
import { Button, ProgressBar, MD3Colors} from 'react-native-paper';

const YourApp = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
    <View style={{ margin: 10,}}></View>
      <View style={{marginHorizontal: 20}}>
      <HyggeProgressBar
        progress={0.5}
        color={HyggeColors.primaryButton}
      />
      </View>
      <View style={{ margin: 10,}}></View>
        <HyggeButton
          title='Start'
          style={styles.HyggeButton}
          mode='contained'
          labelStyle={{paddingVertical: 5}}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  HyggeButton: { backgroundColor: HyggeColors.primaryButton, width:'50%', borderRadius: 30, elevation: 0}
  
})
export default YourApp;