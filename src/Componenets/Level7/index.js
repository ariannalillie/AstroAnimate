import levelLogo from "../../Media/Level-7.png";
import rocket from "../../Media/rocket.svg";
import earth from "../../Media/earth.svg";
import styled, { keyframes } from "styled-components";
import { useState } from "react";
import "./Level7.css";
import { useHistory } from "react-router-dom";

const taskAnimation = (rotate1, rotate2) => keyframes`
  from {
    transform: rotate(0deg);
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

function Level7() {
    //Brings winner to the next level
    const history = useHistory();
    const routeChange = () => {
        let path = '/level_8';
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

     //If player does not type in the correct input
     function notQuite() {
        return (
        <div>
          <h1>Oops, not quiet! Click the reset button to try again</h1>
          <button>Get Hint</button>
        </div>
        )
      }

    const [answer_1, setAnswer_1] = useState("");
    const [isRunning, setIsRunning] = useState(false);

    return (
        <div>
            <img src={levelLogo} className="level-logo" />
            <div className="input-container">
                {isRunning
                    ? answer_1 === "rotate(230deg)"
                        ? youWin()
                        : notQuite()
                    : null}
                <h1 className='instructions'>The rotate() CSS function defines a transformation that rotates an element around a fixed point on the 2D plane, without deforming it. <br /> The Rocket is header in the wrong direction. Rotate the rocket 230 degrees to point it back towards earth.</h1>
                <CustomizedInput
                    value={answer_1}
                    placeholder="rotate(xdeg)"
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
                rotate1={isRunning && answer_1}
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

export default Level7;
