import React from 'react';
import {
  MainContainer
} from './styles';

const TrafficLight = ({ name, color , currentLightOn}) => {
  return(
    <MainContainer lightName={name} color={color} currentLightOn={currentLightOn} />
  );
} 

export default TrafficLight;