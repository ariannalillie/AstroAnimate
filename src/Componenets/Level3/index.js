import levelLogo from "../../Media/Level-3.png";
import rocket from "../../Media/rocket.svg";
import earth from "../../Media/earth.svg";
import styled, { keyframes } from "styled-components";
import { useState } from "react";
import "./Level3.css";
import { useHistory } from "react-router-dom";

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

function Level3() {
    //Brings winner to the next level
    const history = useHistory();
    const routeChange = () => {
        let path = '/level_4';
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


    const [answer_1, setAnswer_1] = useState("");
    const [isRunning, setIsRunning] = useState(false);

    return (
        <div>
            <img src={levelLogo} className="level-logo" />
            <div className="input-container">
                {isRunning
                    ? answer_1 === "rotate(230deg)"
                        ? youWin()
                        : <h1>Oops, not quiet! Click the reset button to try again</h1>
                    : null}
                <h1 className='instructions'>The bounce animation, uses translate(y) and keyframes to move your element up and down on the y-axis</h1>
                <h1 className='instructions'>There is no gravity on the moon, so use translate to make the astronaut bounce.</h1>
                <h1 className='instructions'>.astronaut {"{"}</h1>
                <h1 className='instructions'>animation: bounce 1 2s linear;</h1>
                <h1 className='instructions'>{"}"}</h1>
                <h1 className='instructions'>@keyframes bounce {"{"}</h1>
                <h1 className='instructions'>0% {"{ transform: translateY(0); }"}</h1>
                <div className="label-container">
                <h1 className='instructions'>50%</h1>
                <CustomizedInput
                    value={answer_1}
                    placeholder="translateY(xpx)"
                    onChange={(e) => {
                        // setIsRunning(false);
                        setAnswer_1(e.target.value);
                    }}
                />
                </div>
                <h1 className='instructions'>100% {"{ transform: translateY(0); }"}</h1>
                <h1 className='instructions'>{"}"}</h1>

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

export default Level3;
