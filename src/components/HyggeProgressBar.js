import React from 'react';
import {ProgressBar} from 'react-native-paper';


const HyggeProgressBar = ({
  progress,
  color
}) => {
  return (
    <ProgressBar progress={progress} color={color}/>
  );
};

export {HyggeProgressBar};
