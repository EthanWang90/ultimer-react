import React from 'react';
import Paper from '@material-ui/core/Paper';

var identifier = false;

export default class Block extends React.Component{

    shouldComponentUpdate(nextProps, nextState) {
        if (JSON.stringify(nextProps) === JSON.stringify(this.props) &&
            JSON.stringify(nextState) === JSON.stringify(this.state)) {
            return false;
        }
        
        return true;
    }

    componentWillUpdate(){
        
    }

    componentDidUpdate(){
        identifier = !identifier;
    }

    render(){
        return (
            <div>
                <Paper id="singleBlock" ref="hook" className={identifier?'turnPaper':'reversePaper'}>
                    <div>
                        {this.props.timeValue}
                    </div>
                </Paper>
            </div>
        )
    }
}