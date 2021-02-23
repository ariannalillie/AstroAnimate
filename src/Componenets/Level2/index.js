import "./Level2.css";
import astronaut from "../../Media/astronaut.svg";
import planet from "../../Media/new-planet.svg";
import { useState } from "react";
import styled, { keyframes } from "styled-components";
import levelLogo from "../../Media/Level-2.png";
import { useHistory } from "react-router-dom";
import Hint from "../Hint";
import { isCollide } from "../../Utils";
import SimplePopper from "../SimplePopper";
import HowToPlay from "../HowToPlay";

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

function Level2() {
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
  const routeChange = () => {
    let path = '/level_3';
    history.push(path);
  };

  //If player types in the correct input
  const youWin = () => {
    return (
      <div>
        <h1>You are out of this world!</h1>
        <button className="next-level-button" onClick={routeChange}>next level</button>
      </div>
    )
  };

  //If player does not type in the correct input
  function notQuite() {
    return (
      <div>
        <h1>Oops, not quiet! Click the reset button to try again</h1>
        <Hint message="This is your level 2 hint" />
      </div>
    )
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={levelLogo} className="level-logo" />
        <div className="input-container">
          {isRunning && attemptComplete
            ? isCollisionDetected
              ? youWin()
              : notQuite()
            : null}
          <h1 className='instructions'>The translate(x,y) CSS function repositions an element in the horizontal and/or vertical directions. </h1>
          <h1 className='instructions'>Use translate(x,y) to help the astronaut discover a new planet.</h1>
          <h1 className='margin'>. astronaut {"{"}</h1>
          <div className="label-container">
          <h1 className='margin'>animation: move</h1>
          <SimplePopper name="1" message="duration"/>
          <SimplePopper name="2s" message="delay"/>
          <SimplePopper name="linear;" message="animates at an even speed"/>
          </div>
          <h1 className='instructions'>{"}"}</h1>
          <h1 className='margin'>@keyframes move {"{"}</h1>
          <h1 className='margin'>0% {"{ transform: translate(0px, 0px) }"}</h1>
          <div className="label-container">
            <h1 className='margin'>100% {"{ tranform: "} </h1>
            <CustomizedInput
              value={answer_1}
              placeholder="translate(x,y)"
              onChange={(e) => {
                setIsRunning(false);
                setAnswer_1(e.target.value);
              }}
            />
            <h1 className='margin'>{"}"}</h1>
          </div>
          <h1 className='margin'>{"}"}</h1>
          <div className="button-container">
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
        < HowToPlay className="instruction-button"/>
          </div>


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

export default Level2;
