import React, { Component } from "react";

class Demo1 extends Component {

    componentWillUnmount() {
        console.log("component will unmount");
    }
    
    render() {
        return <h3>Demo 1 component</h3>
    }
}

class Demo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            date: new Date(),
            show: true
        };
        this.handleClick = this.handleClick.bind(this);
        console.log("constructor");
    }

    componentDidMount() {
        // this.timerID = setInterval(() => this.tick());
        console.log("component did mount");
    }

    componentWillUnmount() {
        console.log("component will unmount");
        // clearInterval(this.timerID);
    }

    componentDidUpdate() {
        console.log("component did update");
    }

    handleClick = () => {
        this.setState({
            count: this.state.count + 1,
            show: false
        });
    };

    // tick() {
    //     this.setState({
    //         date: new Date()
    //     });
    // }

    render() {
        console.log("render");
        return (
            <div>
                <h3>Hello Demo</h3>
                <button type="button" onClick={this.handleClick}>
                    Click {this.state.count}
                </button>
                {this.state.show ? <Demo1 /> : null}
                {/* <h2>{this.state.date.toLocaleTimeString()}</h2> */}
            </div>
        );
    }
}

export default Demo;