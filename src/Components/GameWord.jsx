import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { v4 } from 'uuid'

const store = createStore(reducer);
export default function GameWord () {
    return (
        <div className="HangGuyWindow">
            <WordSquare />
        </div>
    );
}