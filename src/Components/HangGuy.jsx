import '../App.css';

import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

const limb = {};

export default function HangGuy(props) {
    let head = <div key='head' className="HangHead animated" ></div>;
    let torso = <div key='torso' className="HangTorso animated" ></div>;
    let armL = <div key='armL' className="HangArmL animated" ></div>;
    let armR = <div key='armR' className="HangArmR animated" ></div>;
    let legL = <div key='legL' className="HangLegL animated" ></div>;
    let legR = <div key='legR' className="HangLegR animated" ></div>;
    let wrongCt = 0;
    let body = [];


    props.guessBox.map((currentValue) => {
        body = [];
        if (!props.gameWord.includes(currentValue)) {
            wrongCt++;
        }
        if (wrongCt > 0) {
            body.push(head);
            if (wrongCt > 1) {
                body.push(torso);
                if (wrongCt > 2) {
                    body.push(armL);
                    if (wrongCt > 3) {
                        body.push(armR);
                        if (wrongCt > 4) {
                            body.push(legL);
                            if (wrongCt > 5) {
                                body.push(legR);
                            }
                        }
                    }
                }
            }
        }
    });
    return (
        <div className="HangGuy">
            {body.map((currentValue) => {
                return currentValue;
            })};
        </div>
    );
}


const mapStateToProps = state => {
    return {
        guessBox: state.guessBox,
        gameWord: state.gameWord
    }
}
HangGuy.propTypes = {
    guessBox: PropTypes.arrayOf(PropTypes.string),
    gameWord: PropTypes.string
};

HangGuy = connect(mapStateToProps)(HangGuy);
