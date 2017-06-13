import React from 'react';
import { observer } from 'mobx-react';
import { Grid , Row , Col  } from 'react-bootstrap'

@observer
export default class TextZone extends React.Component {
    render() {
        
        return (
            <Grid>
                <Row>
                    <div>
                        {this.props.store.LastSequenceString}
                    </div>
                    <div>
                        {this.props.store.LastSequenceSum}
                    </div>
                </Row>
            </Grid>
        )
    }
}