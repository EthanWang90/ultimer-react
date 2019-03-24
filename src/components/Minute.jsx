import React from 'react';
import Block from './Block.jsx'

export default class Minute extends React.Component{
    constructor(props){
        super(props);
        this.state={
            time: []
        }
    }

    formalise=()=>{
        let tmp = this.props.time;
        if(tmp.length === 1){
            tmp = [0, ...this.props.time];
        }
        this.setState({
            time: tmp
        })
    }

    componentWillMount(){
        this.formalise();
    }

    componentWillReceiveProps(){
        this.formalise();
    }

    render(){
        return (
            <div>
                {this.state.time.map((value,index)=>{
                    return (
                        <div key={index} style={{display:'inline-block',margin:1}}>
                            <Block timeValue={value}></Block>
                        </div>
                    )
                })}
                <span>Minutes</span>
            </div>
        )
    }
}