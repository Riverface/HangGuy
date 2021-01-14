import '../App.css';

import React from 'react';
import ReactDOM from 'react-dom';
import WordSquare from './WordSquare'
import { connect } from 'react-redux';
import { v4 } from 'uuid'

export default function GameWord () {
    return (
        <div className="GameWord">
            <WordSquare /><WordSquare /><WordSquare /><WordSquare /><WordSquare /><WordSquare /><WordSquare />
        </div>
    );
}

GameWord.propTypes = {

};