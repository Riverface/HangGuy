import '../index.css';

import GameWord from './GameWord'
import GuessBox from './GuessBox';
import HangGuy from './HangGuy';
import HangStart from './HangStart';
import PropTypes from "prop-types";
import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

class HangWindow extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {

        };
    }
    render(props) {
        let appDOM = null;
        appDOM = <div className="HangWindow">
            <HangStart />
            <GuessBox />
            <HangGuy />
            <GameWord/>
        </div>

        return (appDOM);
    }
}


const mapStateToProps = state => {
    return {

    }
}
HangWindow.propTypes = {

};
HangWindow = connect(mapStateToProps)(HangWindow);
export default HangWindow;