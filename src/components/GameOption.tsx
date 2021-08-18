import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { setCustomerChoice } from "../redux/slices";
import { useHistory } from 'react-router-dom';
import './GameOption.scss';


const GameOption = (props: any) => {
    const history = useHistory();
    const gamesState = useSelector((state: RootState) => state);
    const dispatch = useDispatch<AppDispatch>();
    const handleSellect = () => {
        dispatch(setCustomerChoice({ value: props.name}));
        history.push("/result");
    }
  
    const imageUrl = require("../assets/" + props.image).default

    return <div onClick={handleSellect} className="game-option-container">
        <img src={imageUrl} className="game-option-image"></img>
    </div>
}

export default GameOption;