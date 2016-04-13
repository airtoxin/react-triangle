import React, {Component} from "react"; // eslint-disable-line no-unused-vars
import Triangle from "../lib";

export default class App extends Component {
    constructor(...args) {
        super(...args);
        this.state = {
            x: 300,
            y: 300,
            direction: "up",
            orderDirection: "right",
            size: 50,
            offsetX: 5,
            offsetY: 5,
            R: 0,
            G: 99,
            B: 160,
            step: 5
        };
    }

    render() {
        let prev = {
            x: this.state.x,
            y: this.state.y,
            direction: this.state.direction,
            size: this.state.size
        };
        const Triangles = Array.from(Array(100).keys()).map((i) => {
            prev.x = prev.x + this.state.offsetX;
            prev.y = prev.y + this.state.offsetY;

            const camel = this.state.orderDirection.substring(0, 1).toUpperCase() + this.state.orderDirection.substring(1);
            prev = Triangle[`next${camel}`](prev);

            const rgb = `rgb(${this.state.R + i * this.state.step}, ${this.state.G + i * this.state.step}, ${this.state.B + i * this.state.step})`
            return (<Triangle key={i} {...prev} style={{fill: rgb}} />);
        });

        return (
            <div>
                <p>state: {JSON.stringify(this.state)}</p>
                <div>
                    x: <input type="number" value={this.state.x} onChange={(e) => this.setState({x: +e.target.value})} />
                    y: <input type="number" value={this.state.y} onChange={(e) => this.setState({y: +e.target.value})} />
                    direction: <select value={this.state.direction} onChange={(e) => this.setState({direction: e.target.value})} >
                        <option value="up">up</option>
                        <option value="down">down</option>
                        <option value="left">left</option>
                        <option value="right">right</option>
                    </select>
                    orderDirection: <select value={this.state.orderDirection} onChange={(e) => this.setState({orderDirection: e.target.value})} >
                        <option value="up">up</option>
                        <option value="down">down</option>
                        <option value="left">left</option>
                        <option value="right">right</option>
                    </select>
                    size: <input type="number" value={this.state.size} onChange={(e) => this.setState({size: +e.target.value})} />
                    offsetX: <input type="number" value={this.state.offsetX} onChange={(e) => this.setState({offsetX: +e.target.value})} />
                    offsetY: <input type="number" value={this.state.offsetY} onChange={(e) => this.setState({offsetY: +e.target.value})} />
                    R: <input type="number" value={this.state.R} onChange={(e) => this.setState({R: +e.target.value})} />
                    G: <input type="number" value={this.state.G} onChange={(e) => this.setState({G: +e.target.value})} />
                    B: <input type="number" value={this.state.B} onChange={(e) => this.setState({B: +e.target.value})} />
                    step: <input type="number" value={this.state.step} onChange={(e) => this.setState({step: +e.target.value})} />
                </div>

                <svg width="1000px" height="1000px">
                    {Triangles}
                </svg>
            </div>
        );
    }
}
