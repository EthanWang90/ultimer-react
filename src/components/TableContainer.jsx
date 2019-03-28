import React from 'react';
import Timer from './Timer.jsx';
import Grid from '@material-ui/core/Grid';
import Info from './Info.jsx';


const baseEvents = [
    {
        name:'2020 new year',
        time:'1/1/2020 00:00:00',
        doom: false
    },
    // {
    //     name:'Venice is no longer livable',
    //     time:'1/1/2028 5:53:24',
    //     doom: false
    // },
    {
        name:'Time remaining for Ethan',
        time:'2/28/2022 23:59:10',
        doom: false
    },
    {
        name:'Apophis first arrival',
        time:'4/14/2029 4:49:00',
        doom: true
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
                    time: Date.parse(value.time)-today.getTime(),
                    doom: value.doom,
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
                        time: Date.parse(value.time)-today.getTime(),
                        doom: value.doom,
                    }
                ))
            })
        }, 249)
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    render(){
        return(
            <ul style={{listStyle:'none', position: 'relative', top: 50}}>
                {
                    this.state.events.map((value,index)=>(
                        <li key={index} style={{height:200}}>
                            <Grid container spacing={24}>
                                <Grid item sm={3} xs={12} className='eventInfo'>
                                    <Info timerInfo={value.name} iconInfo={value.doom}></Info>                        
                                </Grid>

                                <Grid item sm={9} xs={12}>
                                    <Timer timerSpan={value.time}></Timer>
                                </Grid>
                            </Grid>
                        </li>
                    ))
                }
            </ul>
        )
    }
}