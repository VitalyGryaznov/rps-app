import React from 'react';
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { setCustomerChoice } from "../redux/slices";
import { useHistory } from 'react-router-dom';
import './GameOption.scss';


const GameOption = (props: any) => {
    const history = useHistory();
    const dispatch = useDispatch<AppDispatch>();
    const handleSellect = () => {
        dispatch(setCustomerChoice({ value: props.name}));
        history.push("/result");
    }
  
    const imageUrl = require("../assets/" + props.image).default

    return <div onClick={handleSellect} className="game-option-container">
        <img alt={props.name} src={imageUrl} className="game-option-image" />
    </div>
}

export default GameOption;