import levelLogo from "../../Media/Level-5.png";
import astronaut from "../../Media/astronaut.svg";
import moon from "../../Media/moon.png";
import styled, { keyframes } from "styled-components";
import { useState } from "react";
import "./Level5.css";
import { useHistory } from "react-router-dom";
import Hint from "../Hint";
import SimplePopper from "../SimplePopper";
import HowToPlay from "../HowToPlay";

const taskAnimation = (rotate1, rotate2) => keyframes`
0%   { transform: translateY(0px); }
50%  { transform: ${rotate1}; }
100% { transform: translateY(0px); }
`;

const MyStyledImg = styled.img`
  src: ${(props) => props.src};
  classname: ${(props) => props.className};
  alt: ${(props) => props.myAlt};
  animation: ${(props) => taskAnimation(props.rotate1, props.rotate2)} infinite
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

function Level5() {

    //Brings winner to the next level
    const history = useHistory();
    const routeChange = () => {
        let path = '/level_6';
        history.push(path);
    };

    //If player types in the correct input
    function youWin() {
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
                <Hint message="This is your level 5 hint" />
            </div>
        )
    };


    const [answer_1, setAnswer_1] = useState("");
    const [isRunning, setIsRunning] = useState(false);

    return (
        <div>
            <img src={levelLogo} className="level-logo" />
            <div className="input-container">
                {isRunning
                    ? answer_1.match(/(?<=translateY\()-?\d+px(?=\))/)
                        ? youWin()
                        : notQuite()
                    : null}
                <h1 className='instructions'>The bounce animation, uses translateY(x) and keyframes to move your element up and down on the y-axis</h1>
                <h1 className='instructions'>There is no gravity on the moon, so use translateY to make the astronaut bounce.</h1>
                <h1 className='margin'>. astronaut {"{"}</h1>
                <div className="label-container">
                    <h1 className='margin'>animation: bounce</h1>
                    <SimplePopper name="infinite" message="duration" />
                    <SimplePopper name="2s" message="delay" />
                    <SimplePopper name="linear;" message="animates at an even speed" />
                </div>
                <h1 className='instructions'>{"}"}</h1>
                <h1 className='margin'>@keyframes bounce {"{"}</h1>
                <h1 className='margin'>0% {"{ transform: translateY(0px); }"}</h1>
                <div className="label-container">
                    <h1 className='margin'>50% {"{ tranform: "}</h1>
                    <CustomizedInput
                        value={answer_1}
                        placeholder="translateY(xpx)"
                        onChange={(e) => {
                            setAnswer_1(e.target.value);
                        }}
                    />
                    <h1 className='margin'>{"}"}</h1>
                </div>
                <h1 className='margin'>100% {"{ transform: translateY(0px); }"}</h1>
                <h1 className='margin'>{"}"}</h1>
                <div className="button-container">
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
        < HowToPlay className="instruction-button" />
                </div>
            </div>
            <MyStyledImg
                id="astronaut-3"
                src={astronaut}
                className="App-logo"
                myAlt="logo"
                rotate1={isRunning && answer_1}
            />
            <MyStyledImg
                id="moon"
                src={moon}
                className="App-logo"
                myAlt="logo"
            />
        </div>
    )
}

export default Level5;
