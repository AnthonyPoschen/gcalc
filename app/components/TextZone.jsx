import React from 'react';
import { observer } from 'mobx-react';
//import { Grid , Row , Col, GridProps  } from 'react-bootstrap'
import {Motion, spring} from 'react-motion';

import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';

@observer
export default class TextZone extends React.Component {
    render() {
        var FontLarge = '12vmin'
        var FontMedium = '8vmin'
        var FontSmall = '4vmin'

        var textAreaStyle = {
            height:'100%'
        }

        var equationStyle = {
            fontWeight:'bold',
            textAlign:'right',
            fontSize: FontLarge,
            lineHeight: FontLarge,
            maxWidth: '100%',
            //height:'50%',
            //whiteSpace: 'nowrap',
            //overflow: 'hidden',
            //paddingRight: '20px',
            //paddingTop: '5px'
        }

        var resultStyle = {
            //height:'50%',
            maxWidth: '100%',
            fontSize: FontSmall,
            lineHeight: FontLarge,
            textAlign:'right',
            //whiteSpace: 'nowrap',
            //paddingRight: '20px'
            
        }
        var MediumLength = 14;
        var LongLength = 20;

        var inputText = this.props.store.LastSequenceString
        var result = this.props.store.LastSequenceSumDisplay

        var summed = (inputText.slice(-1) == "=")
        if(summed) {
            inputText = inputText.slice(0,-1)
            resultStyle = Object.assign({},equationStyle)
            var len = this.props.store.LastSequenceSumDisplay.length
            resultStyle.fontSize =  len > MediumLength ? FontMedium : (len > LongLength) ? FontSmall : resultStyle.fontSize
            resultStyle.lineHeight =  len > MediumLength ? FontMedium : (len > LongLength) ? FontSmall : resultStyle.fontSize
        }
        if(inputText.length > MediumLength) {
            equationStyle.fontSize = FontMedium
            equationStyle.lineHeight = FontMedium
        }
        if(inputText.length > LongLength ) {
            equationStyle.fontSize = FontSmall
            equationStyle.lineHeight = FontSmall
        }

        return (
            <Grid container direction="column" style={textAreaStyle} align="stretch" justify="center" gutter={0}>
                <Grid item xs={6} style={equationStyle}>
                    <Motion style={{x: spring(summed ? -100 : 0)}}>
                        {({x}) => <div style={{
                            WebkitTransform: `translate3d(0, ${x}%, 0)`,
                            transform: `translate3d(0, ${x}%, 0)`,
                            ...textAreaStyle
                        }}>
                        
                            {inputText}
                        
                        </div>}
                    </Motion>
                </Grid>
                <Grid item xs={6} style={resultStyle}>
                    <Motion style={{x: spring(summed ? -100 : 0)}}>
                        {({x}) => <div style={{
                            WebkitTransform: `translate3d(0, ${x}%, 0)`,
                            transform: `translate3d(0, ${x}%, 0)`,
                            ...textAreaStyle
                        }}>
                        
                            {this.props.store.LastSequenceSumDisplay == inputText ? '': this.props.store.LastSequenceSumDisplay}
                        
                        </div>}
                    </Motion>
                </Grid>
            </Grid>

        )
    }
}