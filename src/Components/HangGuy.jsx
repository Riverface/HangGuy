import '../App.css';

import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

const limb = {};

export default function HangGuy(props) {
    let head = <div className="HangHead animated" ></div>;
    let torso =<div className="HangTorso animated" ></div>;
    let armL = <div className="HangArmL animated" ></div>;
    let armR = <div className="HangArmR animated" ></div>;
    let legL = <div className="HangLegL animated" ></div>;
    let legR = <div className="HangLegR animated" ></div>;
    let wrongCt = 0;
    const display = (props) => {
        props.guessBox.items.map((currentValue) => {
        if(currentValue.type === 'GUESS_CORRECT'){
        }
        if(currentValue.type ==='GUESS_INCORRECT'){
        
        }})}
    

    return (
        <div className="HangGuy">
            
        </div>
    );
}


const mapStateToProps = state => {
    return {
        guessBox: state.guessBox
    }
}
HangGuy.propTypes = {
    guessBox: PropTypes.arrayOf(PropTypes.object)
};

HangGuy = connect(mapStateToProps)(HangGuy);
