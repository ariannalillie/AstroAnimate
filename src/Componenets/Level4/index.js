import levelLogo from "../../Media/Level-4.png";
import rocket from "../../Media/rocket.svg";
import earth from "../../Media/earth.svg";
import planet from "../../Media/new-planet.svg";
import styled, { keyframes } from "styled-components";
import { useState } from "react";
import "./Level4.css";
import { useHistory } from "react-router-dom";
import { isCollide } from "../../Utils";
import Hint from "../Hint"
import HowToPlay from "../HowToPlay";

const taskAnimation = (rotate1, rotate2) => keyframes`
    0%   { transform: translate(0px); }
    50%  { transform: ${rotate1}; }
    100% { transform: ${rotate2}; }
`;

const MyStyledImg = styled.img`
  src: ${(props) => props.src};
  classname: ${(props) => props.className};
  alt: ${(props) => props.myAlt};
  animation: ${(props) => taskAnimation(props.rotate1, props.rotate2)} 1 5s
    linear;
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

function Level4() {

    //Brings winner to the next level
    const history = useHistory();
    const routeChange = () => {
        let path = "/level_5";
        history.push(path);
    };

    //If player types in the correct input
    function youWin() {
        return (
            <div>
                <h1>You are out of this world!</h1>
                <button onClick={routeChange}>next level</button>
            </div>
        );
    };

    //If player does not type in the correct input
    function notQuite() {
        return (
            <div>
                <h1>Oops, not quiet! Click the reset button to try again</h1>
                <Hint message="This is your level 4 hint" />
            </div>
        );
    };

    const [answer_1, setAnswer_1] = useState("");
    const [answer_2, setAnswer_2] = useState("");
    const [isRunning, setIsRunning] = useState(false);
    const [attemptComplete, setAttemptComplete] = useState(false);
    const [isCollisionDetected_1, setIsCollisionDetected_1] = useState(false);
    const [isCollisionDetected_2, setIsCollisionDetected_2] = useState(false);

    const rocketElement = document.getElementById("rocket");
    const earthElement = document.getElementById("earth");
    const planetElement = document.getElementById("planet");

    const time = new Date();
    const [collision_1_logged, setCollision_1_logged] = useState(false);
    const [collision_2_logged, setCollision_2_logged] = useState(false);
    if (isCollisionDetected_1 && !collision_1_logged) {
        console.log(
            "isCollisionDetected_1 at ",
            time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds()
        );
        setCollision_1_logged(true);
    }
    if (isCollisionDetected_2 && !collision_2_logged) {
        console.log(
            "isCollisionDetected_2 at ",
            time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds()
        );
        setCollision_2_logged(true);
    }

    return (
        <div>
            <img src={levelLogo} className="level-logo" />
            <div className="input-container">
                {isRunning && attemptComplete ?
                    isCollisionDetected_1 && isCollisionDetected_2 ?
                        youWin()
                        :
                        notQuite()
                    : null}
                <h1 className="instructions">
                    Bring the rocket to both planets.
        </h1>
                <CustomizedInput
                    value={answer_1}
                    placeholder="translate(x,y)"
                    onChange={(e) => {
                        setIsRunning(false);
                        setAnswer_1(e.target.value);
                    }}
                />

                <CustomizedInput
                    value={answer_2}
                    placeholder="translate(x,y)"
                    onChange={(e) => {
                        setIsRunning(false);
                        setAnswer_2(e.target.value);
                    }}
                />
                <div className="button-container">
                    <StyledButton
                        buttonType="run"
                        onClick={() => {
                            setIsRunning(true);
                            const interval1 = setInterval(() => {
                                if (rocketElement && earthElement) {
                                    if (isCollide(rocketElement, earthElement)) {
                                        clearInterval(interval1);
                                        setIsCollisionDetected_1(true);
                                    }
                                }
                            }, 200);

                            const interval2 = setInterval(() => {
                                if (rocketElement && planetElement) {
                                    if (isCollide(rocketElement, planetElement)) {
                                        clearInterval(interval2);
                                        setIsCollisionDetected_2(true);
                                    }
                                }
                            }, 200);

                            setTimeout(() => {
                                setAttemptComplete(true);
                            }, 5000);
                        }}
                    >
                        Run
        </StyledButton>
                    <StyledButton
                        buttonType="reset"
                        onClick={() => {
                            setIsRunning(false);
                            setAnswer_1("");
                            setAnswer_2("");
                        }}
                    >
                        Reset
        </StyledButton>
                    < HowToPlay className="instruction-button" />
                </div>
            </div>
            <MyStyledImg
                id="rocket"
                src={rocket}
                className="App-logo"
                myAlt="logo"
                rotate1={isRunning && answer_1}
                rotate2={isRunning && answer_2}
            />
            <MyStyledImg id="earth" src={earth} className="App-logo" myAlt="logo" />
            <MyStyledImg id="planet" src={planet} className="App-logo" myAlt="logo" />
        </div>
    );
}

export default Level4;
