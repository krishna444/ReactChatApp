import React, { Component } from "react";
import io from 'socket.io-client';
import '../static/App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state={value:'234'};
    }
    componentDidMount() {
        let socket=io.connect("localhost:9000");
        socket.on('connect',data=>{
            console.log("connected");
            socket.emit('join',"Hello World from client");  
            socket.emit('message',{name:"Hari"});          
        });
        socket.on('stock price update', data=>{
            console.log(data);
            this.setState({value:data});
        });

      socket.on('server time',data=>{console.log("date"+data)});
    }
    render() {
        return (
            <div className="container-fluid">
                <h1><marquee>{this.state.value}</marquee></h1>
            </div>
        );
    }
}

module.exports = { App };