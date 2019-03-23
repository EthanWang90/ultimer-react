import React from 'react';

export default class Timer extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div style={{width: 100, height: 100}}>
                {this.props.timerEvent.name}
            </div>
        )
    }
}