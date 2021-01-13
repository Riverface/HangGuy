import '../App.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

const limb={};

export default function HangGuy() {
    return(
        <div className="HangGuy">
            <div className="HangHead"></div>
            <div className="HangTorso"></div>
            <div className="HangArmL"></div>
            <div className="HangArmR"></div>
            <div className="HangLegL"></div>
            <div className="HangLegR"></div>
        </div>
    );
}