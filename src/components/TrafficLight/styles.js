import styled from "styled-components";

export const MainContainer = styled.div`
  position: absolute;
  width: 115px;
  height: 115px;
  background-color: ${props => props.currentLightOn === props.lightName ? props.color : "#c3c3c3"};
  border-radius: 115px;
  margin-top: ${props => props.lightName === "Red" ? "85px" : (props.lightName === "Yellow" ? "217px" : "349px") }
`