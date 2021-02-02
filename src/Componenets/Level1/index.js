import "./Level1.css";
import astronaut from "../../Media/astronaut.svg";
import planet from "../../Media/new-planet.svg";
import { useState } from "react";
import styled, { keyframes } from "styled-components";
// import { anySeries } from "async";

const taskAnimation = (rotate1, rotate2) => keyframes`
  from {
    transform: ${rotate1};
  }
  to {
    transform: ${rotate2};
  }
`;

const MyStyledImg = styled.img`
  src: ${(props) => props.src};
  classname: ${(props) => props.className};
  alt: ${(props) => props.myAlt};
  animation: ${(props) => taskAnimation(props.rotate1, props.rotate2)} infinite
    20s linear;
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

  const astronautElement = document.getElementById("astronaut");
  const planetElement = document.getElementById("planet");

  setInterval(() => {
    const isCollisionDetected =
      astronautElement &&
      planetElement &&
      isCollide(astronautElement, planetElement);

    isCollisionDetected !== null &&
      console.log(`collision detected = ${isCollisionDetected}`);

      if (isCollisionDetected) {
        alert("good job!")
      }
  }, 1000);

  return (
    <div className="App">
      <header className="App-header">
      <h1 className='instructions'>The translate(x,y) CSS function repositions an element in the horizontal and/or vertical directions. <br/> Use transform to help the astronaut discover a new planet.</h1>
        <CustomizedInput
          value={answer_1}
          onChange={(e) => {
            setIsRunning(false);
            setAnswer_1(e.target.value);
          }}
        />

        <StyledButton
          buttonType="run"
          onClick={() => {
            setIsRunning(true);
          }}
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
          // rotate2={isRunning && answer_2}
        />

        <MyStyledImg
          id="planet"
          src={planet}
          className="App-logo"
          myAlt="logo"
          // rotate1={isRunning && answer_1}
          // rotate2={isRunning && answer_2}
        />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
    </div>
  );
}

export default Level1;
