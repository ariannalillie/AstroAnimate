import "./Home.css";
import {  useHistory } from "react-router-dom";
import logo from "../../Media/logo.png";
import homeGraphic from "../../Media/home-page-graphic.svg"

function Home() {
    const history = useHistory();

    const routeChange = () =>{
        let path = '/level_1';
        history.push(path);
      }

    return (
        <div className="home">
            <div className="home-graphics-container">
                <img src={logo} className="logo" />
                <img src={homeGraphic} className="home-graphic" />
            </div>
            <div className="circle">
            <div className="circle-contents">
            <p className="home-text">
                        Become a
                        <br/>
                        master
                        <br/>
                        of CSS with
                        <br/>
                        AstroAnimate
                        <br/>
                </p>
                <button className="start-game-button" onClick={routeChange}>Start Game</button>
            </div>
            </div>
        </div>
    )
};

export default Home;
