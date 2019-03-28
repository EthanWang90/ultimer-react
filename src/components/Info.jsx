import React from 'react';
import icon from '../img/013.png';

export default class Info extends React.Component{
    render(){
        return (
            <div style={{position:'relative', top:3}}>
                <div style={{display:'inline-block', height:21, opacity:0.5}}>
                    {this.props.timerInfo}&nbsp;
                </div>
                {this.props.iconInfo?
                <div style={{display:'inline-block', width:21, height:21}}>
                   <img src={icon} alt='' style={{height:'100%',width:'100%'}}/> 
                </div>
                :null}
            </div>
        )
    }
}