import React from 'react';
import Paper from '@material-ui/core/Paper';

export default class Block extends React.Component{
    render(){
        return (
            <div>
                <Paper style={{display:'inline-block',width:15,height:25,borderRadius:1}}>
                    <span>{this.props.timeValue}</span>
                </Paper>
            </div>
        )
    }
}