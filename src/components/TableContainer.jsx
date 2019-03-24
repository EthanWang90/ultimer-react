import React from 'react';
import Timer from './Timer.jsx';

const baseEvents = [
    {
        name:'a',
        time:'Jul 8, 2322'
    },
    {
        name:'b',
        time:'Jul 6, 250000'
    },
    {
        name:'c',
        time:'May 3, 2021'
    },
];
const today = new Date();

export default class TableContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            events: baseEvents.map(value=>(
                {
                    name: value.name,
                    time: Date.parse(value.time)-today.getTime()
                }
            ))
        }
    }

    componentDidMount(){
        this.interval = setInterval(() => {
            let today = new Date();
            this.setState({
                events: baseEvents.map(value=>(
                    {
                        name: value.name,
                        time: Date.parse(value.time)-today.getTime()
                    }
                ))
            })
        }, 500)
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    render(){
        return(
            <div>
                <table style={{border:1}}>
                    <tbody>
                        {
                            this.state.events.map((value,index)=>(
                                <tr key={index}>
                                    <th>{value.name}</th>
                                    <td>
                                        <Timer timerSpan={value.time}></Timer>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}