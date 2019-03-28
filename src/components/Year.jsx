import React from 'react';
import Block from './Block.jsx'

export default class Year extends React.Component{
    render(){
        return (
            <div style={{display:'table-cell', verticalAlign: 'bottom'}}>
                {this.props.time.map((value,index)=>{
                    return (
                        <div key={index} style={{display:'inline-block',margin:1}}>
                            <Block timeValue={value}></Block>
                        </div>
                    )
                })}
                <span className='suffix'>Years</span>
            </div>
        )
    }
}