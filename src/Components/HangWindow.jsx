import '../index.css';

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
        let visibleState = null;
        visibleState =
            <div className="HangWindow">
                <GuessBox />
                <HangGuy />
                <HangStart />
            </div>

        return (visibleState);
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