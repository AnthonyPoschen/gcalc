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
            height:"100%",
            //marginTop:"10px",
            maxWidth: "100%"
        }
        var rowStyle = {
            //flex: "1 1 auto",
            height:"100%"
        }
        var ButtonStyle = {
            width: "100%",
            height: "100%",
            // Fix for button default minSizes forces them out of bounds
            minWidth: '0px',
            minHeight: '0px',
            fontSize: '8vmin'
        }
        var itemStyle = {
            maxWidth: "100%",
            width:"100%"
        }
        return (
            // 3 x 4 grid of numbers
            <Grid container direction="column" align="stretch" style={gridStyle} justify="center" gutter={0}>

                <Grid item xs={3} style={itemStyle} >
                    <Grid container direction="row" justify="space-between" align="stretch" style={rowStyle} gutter={0}>
                        <Grid item xs={3}><Button style={ButtonStyle} onClick={() => this.props.store.addNumber("7")}>7</Button></Grid>
                        <Grid item xs={3}><Button style={ButtonStyle} onClick={() => this.props.store.addNumber("8")}>8</Button></Grid>
                        <Grid item xs={3}><Button style={ButtonStyle} onClick={() => this.props.store.addNumber("9")}>9</Button></Grid>
                        <Grid item xs={3}><Button style={ButtonStyle} onClick={() => this.props.store.addOperation("/")}>/</Button></Grid>
                    </Grid> 
                </Grid>

                <Grid item xs={3} style={itemStyle}>
                    <Grid container direction="row" justify="space-between" align="stretch" style={rowStyle} gutter={0}>
                        <Grid item xs={3}><Button style={ButtonStyle} onClick={() => this.props.store.addNumber("4")}>4</Button></Grid>
                        <Grid item xs={3}><Button style={ButtonStyle} onClick={() => this.props.store.addNumber("5")}>5</Button></Grid>
                        <Grid item xs={3}><Button style={ButtonStyle} onClick={() => this.props.store.addNumber("6")}>6</Button></Grid>
                        <Grid item xs={3}><Button style={ButtonStyle} onClick={() => this.props.store.addOperation("*")}>x</Button></Grid>
                    </Grid>
                </Grid>

                <Grid item xs={3} style={itemStyle}>
                    <Grid container direction="row" justify="space-between" align="stretch" style={rowStyle} gutter={0}>
                        <Grid item xs={3}><Button style={ButtonStyle} onClick={() => this.props.store.addNumber("1")}>1</Button></Grid>
                        <Grid item xs={3}><Button style={ButtonStyle} onClick={() => this.props.store.addNumber("2")}>2</Button></Grid>
                        <Grid item xs={3}><Button style={ButtonStyle} onClick={() => this.props.store.addNumber("3")}>3</Button></Grid>
                        <Grid item xs={3}><Button style={ButtonStyle} onClick={() => this.props.store.addOperation("-")}>-</Button></Grid>
                    </Grid>
                </Grid>

                <Grid item xs={3} style={itemStyle}>
                    <Grid container direction="row" justify="space-between" align="stretch" style={rowStyle} gutter={0}>
                        <Grid item xs={3}><Button style={ButtonStyle} onClick={() => this.props.store.addNumber(".")}>.</Button></Grid>
                        <Grid item xs={3}><Button style={ButtonStyle} onClick={() => this.props.store.addNumber("0")}>0</Button></Grid>
                        <Grid item xs={3}><Button style={ButtonStyle}>=</Button></Grid>
                        <Grid item xs={3}><Button style={ButtonStyle} onClick={() => this.props.store.addOperation("+")}>+</Button></Grid>
                    </Grid>
                </Grid>

            </Grid>
            
        )
    }
}


/*
                        <Grid item xs={12/6}><Button style={ButtonStyle} onClick={() => this.props.store.addOperation("(")}>(</Button></Grid>
                        <Grid item xs={12/6}><Button style={ButtonStyle} onClick={() => this.props.store.addOperation(")")}>)</Button></Grid>

*/