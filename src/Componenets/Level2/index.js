import levelLogo from "../../Media/Level-2.png";
import rocket from "../../Media/rocket.svg";
import earth from "../../Media/earth.svg";
import styled, { keyframes } from "styled-components";
import { useState } from "react";
import "./Level2.css";
import { useHistory } from "react-router-dom";
import Hint from "../Hint";
import SimplePopper from "../SimplePopper";

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
  animation: ${(props) => taskAnimation(props.rotate1, props.rotate2)}
  1  2s linear;
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

    //Brings winner to the next level
    const history = useHistory();
    const routeChange = () => {
        let path = "/level_3";
        history.push(path);
    };

    //If player types in the correct input
    function youWin() {
        return (
            <div>
                <h1>You are out of this world!</h1>
                <button className="next-level-button" onClick={routeChange}>next level</button>
            </div>
        );
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

    const [answer_1, setAnswer_1] = useState("");
    const [attemptComplete, setAttemptComplete] = useState(false);
    const [isRunning, setIsRunning] = useState(false);

    //Vallidates whether answer provides in within the correct range
    const answerValidator = (num) => {
        num = +num;
        return (num <= 260) && (num >= 210)
    }

    return (
        <div>
            <img src={levelLogo} className="level-logo" />
            <div className="input-container">
                {isRunning && attemptComplete ?
                    answerValidator(answer_1.match(/(?<=rotate\()-?\d+(?=deg\))/))
                        ?
                        youWin()
                        : notQuite()
                    : null}
                <h1 className="instructions">The rotate(xdeg) CSS function defines a transformation that rotates an element around a fixed point on the 2D plane, without deforming it.</h1>
                <h1 className="instructions">The Rocket is header in the wrong direction. Rotate the rocket to point it back towards earth.</h1>
                <h1 className='margin'>. rocket {"{"}</h1>
                <div className="label-container">
                    <h1 className='margin'>animation: rotate</h1>
                    <SimplePopper name="1" message="duration" />
                    <SimplePopper name="2s" message="delay" />
                    <SimplePopper name="linear;" message="animates at an even speed" />
                </div>
                <h1 className='instructions'>{"}"}</h1>
                <h1 className='margin'>@keyframes rotate {"{"}</h1>
                <h1 className='margin'>0% {"{ transform: rotate(0deg) }"}</h1>
                <div className="label-container">
                    <h1 className='margin'>100% {"{ tranform: "} </h1>
                    <CustomizedInput
                        value={answer_1}
                        placeholder="rotate(xdeg)"
                        onChange={(e) => {
                            setAnswer_1(e.target.value);
                        }}
                    />
                    <h1 className='margin'>{"}"}</h1>
                </div>
                <h1 className='margin'>{"}"}</h1>
                <StyledButton
                    buttonType="run"
                    onClick={() => {
                        setAttemptComplete(false);
                        setIsRunning(true);
                        setTimeout(() => {
                            setAttemptComplete(true);
                        }, 2000);
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
            <MyStyledImg id="earth" src={earth} className="App-logo" myAlt="logo" />
        </div>
    );
}

export default Level2;
