import React from 'react';
import { observer } from 'mobx-react';
//import { Button , Grid , Row , Col, GridProps  } from 'react-bootstrap'
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button'

@observer
export default class ButtonZone extends React.Component {

    render() {
        var gridStyle = {
            height:'calc(100% - 100px)',
            marginTop:'10px'
        //    width: '100%'
        }
        var rowStyle = {
            flex: "1 1 auto",
            height:"100%"
        }
        var ButtonStyle = {
            height:"100%",
            width: "100%"
        }
        var itemStyle = {
            maxWidth: "100%"
        }
        return (
            
            <Grid container direction="column" align="stretch" style={gridStyle} justify="center">

                <Grid item xs={3} style={itemStyle}>
                    <Grid container direction="row" justify="space-between" align="stretch" style={rowStyle}>
                        <Grid item xs={3}><Button style={ButtonStyle} onClick={() => this.props.store.addNumber("7")}>7</Button></Grid>
                        <Grid item xs={3}><Button style={ButtonStyle} onClick={() => this.props.store.addNumber("8")}>8</Button></Grid>
                        <Grid item xs={3}><Button style={ButtonStyle} onClick={() => this.props.store.addNumber("9")}>9</Button></Grid>
                        <Grid item xs={3}><Button style={ButtonStyle} onClick={() => this.props.store.addOperation("/")}>/</Button></Grid>
                    </Grid>
                    
                </Grid>

                <Grid item xs={3} style={itemStyle}>
                    <Grid container direction="row" justify="space-between" align="stretch" style={rowStyle}>
                        <Grid item xs={3}><Button style={ButtonStyle} onClick={() => this.props.store.addNumber("4")}>4</Button></Grid>
                        <Grid item xs={3}><Button style={ButtonStyle} onClick={() => this.props.store.addNumber("5")}>5</Button></Grid>
                        <Grid item xs={3}><Button style={ButtonStyle} onClick={() => this.props.store.addNumber("6")}>6</Button></Grid>
                        <Grid item xs={3}><Button style={ButtonStyle} onClick={() => this.props.store.addOperation("*")}>x</Button></Grid>
                    </Grid>

                </Grid>
                <Grid item xs={3} style={itemStyle}>
                    <Grid container direction="row" justify="space-between" align="stretch" style={rowStyle}>
                        <Grid item xs={3}><Button style={ButtonStyle} onClick={() => this.props.store.addNumber("1")}>1</Button></Grid>
                        <Grid item xs={3}><Button style={ButtonStyle} onClick={() => this.props.store.addNumber("2")}>2</Button></Grid>
                        <Grid item xs={3}><Button style={ButtonStyle} onClick={() => this.props.store.addNumber("3")}>3</Button></Grid>
                        <Grid item xs={3}><Button style={ButtonStyle} onClick={() => this.props.store.addOperation("-")}>-</Button></Grid>
                    </Grid>

                </Grid>
                <Grid item xs={3} style={itemStyle}>
                    <Grid container direction="row" justify="space-between" align="stretch" style={rowStyle}>
                        <Grid item xs={12/6}><Button style={ButtonStyle} onClick={() => this.props.store.addNumber(".")}>.</Button></Grid>
                        <Grid item xs={12/6}><Button style={ButtonStyle} onClick={() => this.props.store.addNumber("0")}>0</Button></Grid>
                        <Grid item xs={12/6}><Button style={ButtonStyle}>=</Button></Grid>
                        <Grid item xs={12/6}><Button style={ButtonStyle} onClick={() => this.props.store.addOperation("+")}>+</Button></Grid>
                        <Grid item xs={12/6}><Button style={ButtonStyle} onClick={() => this.props.store.addOperation("(")}>(</Button></Grid>
                        <Grid item xs={12/6}><Button style={ButtonStyle} onClick={() => this.props.store.addOperation(")")}>)</Button></Grid>
                    </Grid>

                </Grid>
            </Grid>
            
            /*
            <Grid container direction="column" align="stretch">
                <Grid item xs={3}>
                    <Grid container direction="row">
                       <div>123</div> <div>123</div>
                    </Grid>
                </Grid>
                <Grid item xs={3}>
                    <Grid item direction="row">
2
                    </Grid>

                </Grid>
                <Grid item xs={3}>
                    <Grid item direction="row">
3
                    </Grid>

                </Grid>
                <Grid item xs={3}>
                    <Grid item direction="row">
4
                    </Grid>

                </Grid>
            </Grid>
*/
        )
    }
}