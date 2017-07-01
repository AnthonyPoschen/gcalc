import React from 'react';
import { observer } from 'mobx-react';
import { Button , Grid , Row , Col  } from 'react-bootstrap'


@observer
export default class ButtonZone extends React.Component {

    render() {
        
        return (
            <Grid>
                <Row>
                    <Button onClick={() => this.props.store.addNumber("7")}>7</Button>
                    <Button onClick={() => this.props.store.addNumber("8")}>8</Button>
                    <Button onClick={() => this.props.store.addNumber("9")}>9</Button>
                    <Button onClick={() => this.props.store.addOperation("/")}>/</Button>
                </Row>
                <Row>
                    <Button onClick={() => this.props.store.addNumber("4")}>4</Button>
                    <Button onClick={() => this.props.store.addNumber("5")}>5</Button>
                    <Button onClick={() => this.props.store.addNumber("6")}>6</Button>
                    <Button onClick={() => this.props.store.addOperation("*")}>x</Button>
                </Row>
                <Row>
                    <Button onClick={() => this.props.store.addNumber("1")}>1</Button>
                    <Button onClick={() => this.props.store.addNumber("2")}>2</Button>
                    <Button onClick={() => this.props.store.addNumber("3")}>3</Button>
                    <Button onClick={() => this.props.store.addOperation("-")}>-</Button>
                </Row>
                <Row>
                    <Button onClick={() => this.props.store.addNumber("0")}>0</Button>
                    <Button onClick={() => this.props.store.addNumber(".")}>.</Button>
                    <Button>=</Button>
                    <Button onClick={() => this.props.store.addOperation("+")}>+</Button>
                    <Button onClick={() => this.props.store.addOperation("(")}>(</Button>
                    <Button onClick={() => this.props.store.addOperation(")")}>)</Button>
                </Row>
            </Grid>

        )
    }
}