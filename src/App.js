import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import TableContainer from './components/TableContainer';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      foo: 'before changes'
    }
  }

  componentDidMount(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET','http://localhost:8111/users/test',true);
    xhr.send();
    xhr.onreadystatechange = () =>{
      if(xhr.readyState == XMLHttpRequest.DONE){
        let gotServices = JSON.parse(xhr.responseText);
        setTimeout(()=>{},2000);
        this.setState({
          foo: gotServices,
        })
      }
      else{
        console.log(xhr.readyState);
        console.log(XMLHttpRequest.DONE);
        alert("ajax失败了");
      }
    }
  }

  render() {
    return (
      <div className="App">
        <TableContainer></TableContainer>
        <div>
          <p>{this.state.foo}</p>
        </div>
      </div>
    );
  }
}

export default App;
