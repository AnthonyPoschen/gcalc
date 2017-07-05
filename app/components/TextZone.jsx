import React from 'react';
import { observer } from 'mobx-react';
//import { Grid , Row , Col, GridProps  } from 'react-bootstrap'
import {Motion, spring} from 'react-motion';

import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';

@observer
export default class TextZone extends React.Component {
    render() {
        var textAreaStyle = {
            minHeight:'100px'
        }

        var equationStyle = {
            fontWeight:'bold',
            textAlign:'right',
            fontSize:'45px',
            height:'50px',
            //whiteSpace: 'nowrap',
            //overflow: 'hidden',
            paddingRight: '20px',
            paddingTop: '5px'
        }

        var resultStyle = {
            height:'50px',
            fontSize:'16px',
            textAlign:'right',
            //whiteSpace: 'nowrap',
            paddingRight: '20px'
            
        }
        var MediumLength = 14;
        var LongLength = 20;

        var inputText = this.props.store.LastSequenceString
        var summed = (inputText.slice(-2) == "= ")
        if(summed) {
            inputText = inputText.slice(0,-2)
            resultStyle = Object.assign({},equationStyle)
            var len = this.props.store.LastSequenceSumDisplay.length
            resultStyle.fontSize =  len > MediumLength ? '30px' : (len > LongLength) ? '18px' : resultStyle.fontSize
        }
        if(inputText.length > MediumLength) {
            equationStyle.fontSize = '30px'
        }
        if(inputText.length > LongLength ) {
            equationStyle.fontSize = '18px'
        }

        return (
            <Grid container direction="column" style={textAreaStyle}>
                    <Motion style={{x: spring(summed ? -50 : 0)}}>
                        {({x}) => <div style={{
                            WebkitTransform: `translate3d(0, ${x}px, 0)`,
                            transform: `translate3d(0, ${x}px, 0)`
                        }}>
                        <Grid item xs={12} style={equationStyle}>
                            {inputText}
                        </Grid>
                        </div>}
                    </Motion>
                    <Motion style={{x: spring(summed ? -50 : 0)}}>
                        {({x}) => <div style={{
                            WebkitTransform: `translate3d(0, ${x}px, 0)`,
                            transform: `translate3d(0, ${x}px, 0)`
                        }}>
                        <Grid item xs={12} style={resultStyle}>
                            {this.props.store.LastSequenceSumDisplay}
                        </Grid>
                        </div>}
                    </Motion>
            </Grid>

        )
    }
}