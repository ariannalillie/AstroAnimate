import levelLogo from "../../Media/Level-2.png";
import rocket from "../../Media/rocket.svg";
import earth from "../../Media/earth.svg";
import styled, { keyframes } from "styled-components";
import { useState } from "react";

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

function Level2() {
    const [answer_1, setAnswer_1] = useState("");
    const [isRunning, setIsRunning] = useState(false);

    return (
        <div>
            <img src={levelLogo} className="level-logo" />
            <div className="input-container">
            <h1 className='instructions'>The rotate() CSS function defines a transformation that rotates an element around a fixed point on the 2D plane, without deforming it. <br /> The Rocket is header in the wrong direction. Rotate the rocket x Degrees to point it back towards earth.</h1>
            <CustomizedInput
                value={answer_1}
                placeholder="translate(x,y)"
                onChange={(e) => {
                    // setIsRunning(false);
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
        </div>
            <MyStyledImg
                id="rocket"
                src={rocket}
                className="App-logo"
                myAlt="logo"
            />
            <MyStyledImg
                id="earth"
                src={earth}
                className="App-logo"
                myAlt="logo"
            />
        </div>
    )
}

export default Level2;
