import "./Level1.css";
import astronaut from "../../Media/astronaut.svg";
import planet from "../../Media/new-planet.svg";
import { useState } from "react";
import styled, { keyframes } from "styled-components";
import levelLogo from "../../Media/Level-1.png";
import {  useHistory } from "react-router-dom";

const taskAnimation = (rotate1, rotate2) => keyframes`
  from {
    transform: ${rotate2};
  }
  to {
    transform: ${rotate1};
  }
`;

const MyStyledImg = styled.img`
  src: ${(props) => props.src};
  classname: ${(props) => props.className};
  alt: ${(props) => props.myAlt};
  animation: ${(props) => taskAnimation(props.rotate1, props.rotate2)} 1
    2s linear;
  margin: 0.5em;
`;

const CustomizedInput = styled.input`
  display: flex;
  width: 25%;
  height: 2em;
  margin: 0 1em 0 0;
`;

const StyledButton = styled.button`
  border-radius: 4px;
  padding: 1em 1em 2.5em 1em;
  margin: 0.5em;
  width: ${(props) => (props.buttonType === "reset" ? "7em" : "14em")};
  height: 3.2em;
`;

const isCollide = (a, b) => {
  var aRect = a && a.getBoundingClientRect();
  var bRect = b && b.getBoundingClientRect();

  return (
    aRect &&
    bRect &&
    !(
      aRect.top + aRect.height < bRect.top ||
      aRect.top > bRect.top + bRect.height ||
      aRect.left + aRect.width < bRect.left ||
      aRect.left > bRect.left + bRect.width
    )
  );
};

function Level1() {
  const [answer_1, setAnswer_1] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [attemptComplete, setAttemptComplete] = useState(false);
  const [isCollisionDetected, setIsCollisionDetected] = useState(false);

  const astronautElement = document.getElementById("astronaut");
  const planetElement = document.getElementById("planet");

  function run() {
    setAttemptComplete(false);
    setIsRunning(true);
    setTimeout(() => {
      setAttemptComplete(true);
      setIsCollisionDetected
      (astronautElement &&
        planetElement &&
        isCollide(astronautElement, planetElement));
    }, 2000)
  }

  //Brings winner to the next level
  const history = useHistory();
  const routeChange = () =>{
      let path = '/level_2';
      history.push(path);
    }

  //If player types in the correct input
  function youWin() {
    return (
      <div>
        <h1>You are out of this world!</h1>
        <button onClick={routeChange}>next level</button>
      </div>
    )
  }

  // function notQuite() {
  //   <div>
  //     <h1>Oops, not quiet! Click the reset button to try again</h1>
  //     <button>Get Hint</button>
  //   </div>
  // }

  return (
    <div className="App">
      <header className="App-header">
        <img src={levelLogo} className="level-logo" />
        <div className="input-container">
        {isRunning && attemptComplete
          ? isCollisionDetected
            ? youWin()
            : <h1>Oops, not quiet! Click the reset button to try again</h1>
          : null}
        <h1 className='instructions'>The translate(x,y) CSS function repositions an element in the horizontal and/or vertical directions. <br /> Use transform to help the astronaut discover a new planet.</h1>
        <CustomizedInput
          value={answer_1}
          placeholder="translate(x,y)"
          onChange={(e) => {
            setIsRunning(false);
            setAnswer_1(e.target.value);
          }}
        />
        <StyledButton
          buttonType="run"
          onClick={run}
        >
          Run
        </StyledButton>
        <StyledButton
          buttonType="reset"
          onClick={() => {
            setIsRunning(false);
            setAnswer_1("");
          }}
        >
          Reset
        </StyledButton>

        <MyStyledImg
          id="astronaut"
          src={astronaut}
          className="App-logo"
          myAlt="logo"
          rotate1={isRunning && answer_1}
        />

        <MyStyledImg
          id="planet"
          src={planet}
          className="App-logo"
          myAlt="logo"
        />
        </div>
      </header>
    </div>
  );
}

export default Level1;
