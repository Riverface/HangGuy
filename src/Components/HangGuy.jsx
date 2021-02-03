import '../App.css';

import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

const limb = {};

export default function HangGuy(props) {
    let head = <div className="HangHead animated" ></div>;
    let torso = <div className="HangTorso animated" ></div>;
    let armL = <div className="HangArmL animated" ></div>;
    let armR = <div className="HangArmR animated" ></div>;
    let legL = <div className="HangLegL animated" ></div>;
    let legR = <div className="HangLegR animated" ></div>;
    let wrongCt = 0;
    let body = null;

    props.guessBox.map((currentValue) => {
        if (props.gameWord.includes(currentValue)) {
            wrongCt++;
        }
        if (wrongCt > 0) {
            body += head;
            if (wrongCt > 1) {
                body += torso;
                if (wrongCt > 2) {
                    body += armL;
                    if (wrongCt > 3) {
                        body += armR;
                        if (wrongCt > 4) {
                            body += legL;
                            if (wrongCt > 5) {
                                body += legR;
                            }
                        }
                    }
                }
            }
        }
    });
    return (
        <div className="HangGuy">
            {body}
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
