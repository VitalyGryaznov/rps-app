import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import './Result.scss';
import gameOptions from '../constants/gameOptions';
import { CircularProgress } from "@material-ui/core";
import { useHistory } from 'react-router-dom';


const Result = () => {
    type resultType = "WIN" | "LOSE" | "TIE";
    const history = useHistory();
    const gamesState = useSelector((state: RootState) => state);
    const [loading, setLoading] = useState(true); 
    const [computerChoiceImage, setComputerChoiceImage] = useState(require("../assets/question.png").default);
    const [customerChoiceImage, setCustomerChoiceImage] = useState(require("../assets/question.png").default);
    const [result, setResult] = useState("");
    const [computerChoice, setComputerChoice] = useState("");
    const resultTexts = {WIN: "You WIN!", LOSE: "You lose!", TIE: "It's a tie"};


    const getResult = async () => {
        setCustomerChoiceImage(require("../assets/" + gameOptions.find(it => it.name == gamesState.game.customerChoice)?.image).default);
        const response = await fetch("http://localhost:3000/play", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ "customerChoice": gamesState.game.customerChoice })
        });
        const resultBody = await response.json();
        setComputerChoice(resultBody.computerChoice);
        setResult(resultTexts[resultBody.result as resultType]);
        setComputerChoiceImage(require("../assets/" + gameOptions.find(it => it.name == resultBody.computerChoice)?.image).default);
        setLoading(false)
    }

    useEffect(() => {
        if (gamesState.game.customerChoice) {
            getResult();
        } else {
            history.push("/");
        }
    }, []);

    return <div className="result-container">
        <a className="play-again-button" href="/">play again</a>
        <div className="results">
            <div className="results_item">
                <div>Your choice</div>
                <img src={customerChoiceImage} className="choice_image"></img>
            </div>
            <div className="results_item results_item_center-horizontally results_item_highlited">
                {(loading) ? (<div className="centered"><CircularProgress /></div>) : (
                    <div>
                        {result}
                    </div>
                )}
            </div>
            <div className="results_item">
                <div>Computer's choice</div>

                {(loading) ? (<div className="centered"><CircularProgress /></div>) : (
                    <div>
                        <img src={computerChoiceImage} className="choice_image"></img>
                    </div>
                )}
            </div>
        </div>

    </div>
}

export default Result;