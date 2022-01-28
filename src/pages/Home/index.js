import React, { useRef, useState } from 'react';
import TrafficLight from '../../components/TrafficLight';
import {
  MainContainer,
  StartStopButton
} from './styles';

const Home = () => {
  const [currentLightOn, setCurrentLightOn] = useState("None");
  const [stopped, setStopped] = useState(true);
  const stoppedRef = useRef(true);


  function start() {
    if (!stoppedRef.current) {
      const green = new Promise((resolve) => resolve(setCurrentLightOn("Green")));
      green.then(() => !stoppedRef.current ? new Promise((resolve) => {
          setTimeout(() => resolve(setCurrentLightOn("Yellow")), 10000);
        }) : setCurrentLightOn("None")
      ).then(() => !stoppedRef.current ? new Promise((resolve) => {
          setTimeout(() => resolve(setCurrentLightOn("Red")), 4000);
        }) : setCurrentLightOn("None")
      ).then(() => !stoppedRef.current ? new Promise((resolve) => {
          setTimeout(() => resolve(start()), 8000);
        }) : setCurrentLightOn("None")
      );
    }
  }

  function handleStartStopButtonClick() {
    stoppedRef.current = !stoppedRef.current;
    
    if (stopped) {
      start();
    } else {
      setCurrentLightOn("None");
    } 

    setStopped(!stopped);
  }

  return(
    <MainContainer>
      <img src="./traffic_signal_img.png" alt=""/>
      <TrafficLight name="Red" color="#ff0000" currentLightOn={currentLightOn} />
      <TrafficLight name="Yellow" color="#ffde00" currentLightOn={currentLightOn} />
      <TrafficLight name="Green" color="#00ff00" currentLightOn={currentLightOn} />

      <StartStopButton onClick={() => handleStartStopButtonClick()} >{ stopped ? "Start" : "Stop" }</StartStopButton>
    </MainContainer>
  );
}

export default Home;