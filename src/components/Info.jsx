import React from 'react';

export default class Info extends React.Component{
    render(){
        return (
            <div style={{position:'relative', top:'15%'}}>
                {this.props.timerInfo}
            </div>
        )
    }
}