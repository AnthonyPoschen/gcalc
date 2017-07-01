import React from 'react';
import { observer } from 'mobx-react';
import { Grid , Row , Col  } from 'react-bootstrap'
import {Motion, spring} from 'react-motion';

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
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            
        }

        var resultStyle = {
            height:'50px',
            fontSize:'16px',
            textAlign:'right',
            whiteSpace: 'nowrap',
            
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
            <Grid style={textAreaStyle} fluid={true}>
                    <Motion style={{x: spring(summed ? -50 : 0)}}>
                        {({x}) => <div style={{
                            WebkitTransform: `translate3d(0, ${x}px, 0)`,
                            transform: `translate3d(0, ${x}px, 0)`
                        }}>
                        <Row xs={8} md={4} style={equationStyle}>
                            {inputText}
                        </Row>
                        </div>}
                    </Motion>
                    <Motion style={{x: spring(summed ? -50 : 0)}}>
                        {({x}) => <div style={{
                            WebkitTransform: `translate3d(0, ${x}px, 0)`,
                            transform: `translate3d(0, ${x}px, 0)`
                        }}>
                        <Row xs={8} md={4} style={resultStyle}>
                            {this.props.store.LastSequenceSumDisplay}
                        </Row>
                        </div>}
                    </Motion>
            </Grid>
        )
    }
}