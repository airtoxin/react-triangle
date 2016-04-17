import React, {Component} from "react"; // eslint-disable-line no-unused-vars
import RadioGroup from "react-radio-group";
import Triangle from "../lib";

export default class App extends Component {
    constructor(...args) {
        super(...args);
        this.state = {
            x: 500,
            y: 500,
            direction: "up",
            orderDirection: "right",
            size: 50,
            steps: 25,
            offsetX: 0,
            offsetY: 0,
            R: 0,
            G: 99,
            B: 160,
            colorStep: 5
        };
    }

    render() {
        let prev = {
            x: this.state.x,
            y: this.state.y,
            direction: this.state.direction,
            size: this.state.size
        };
        const Triangles = Array.from(Array(this.state.steps).keys()).map((i) => {
            const rgb = `rgb(${this.state.R + i * this.state.colorStep}, ${this.state.G + i * this.state.colorStep}, ${this.state.B + i * this.state.colorStep})`
            const T = (<Triangle key={i} {...prev} style={{fill: rgb}} />);

            prev.x = prev.x + this.state.offsetX;
            prev.y = prev.y + this.state.offsetY;

            const camel = this.state.orderDirection.substring(0, 1).toUpperCase() + this.state.orderDirection.substring(1);
            prev = Triangle[`next${camel}`](prev);

            return T;
        });

        return (
            <div>
                <div style={{position:"absolute"}}>
                    <h1>react-triangle</h1>
                    <p>Install: npm install react-triangle</p>

                    <p>state: {JSON.stringify(this.state)}</p>
                    <div style={{display:"flex", flexDirection:"column"}}>
                        <div style={{display:"flex", flexDirection:"row"}}>
                            x: <input type="number" value={this.state.x} onChange={(e) => this.setState({x: +e.target.value})} />
                            y: <input type="number" value={this.state.y} onChange={(e) => this.setState({y: +e.target.value})} />
                        </div>
                        <div style={{display:"flex", flexDirection:"row"}}>
                            direction:
                            <RadioGroup name="direction" selectedValue={this.state.direction} onChange={(v) => this.setState({direction: v})}>
                                {(Radio) => (
                                    <div>
                                        up<Radio value="up" />
                                        down<Radio value="down" />
                                        left<Radio value="left" />
                                        right<Radio value="right" />
                                    </div>
                                )}
                            </RadioGroup>
                        </div>
                        <div style={{display:"flex", flexDirection:"row"}}>
                            orderDirection:
                            <RadioGroup name="orderDirection" selectedValue={this.state.orderDirection} onChange={(v) => this.setState({orderDirection: v})}>
                                {(Radio) => (
                                    <div>
                                        up<Radio value="up" />
                                        down<Radio value="down" />
                                        left<Radio value="left" />
                                        right<Radio value="right" />
                                    </div>
                                )}
                            </RadioGroup>
                        </div>
                        <div style={{display:"flex", flexDirection:"row"}}>
                            size: <input type="number" value={this.state.size} onChange={(e) => this.setState({size: +e.target.value})} />
                            steps: <input type="number" value={this.state.steps} onChange={(e) => this.setState({steps: +e.target.value})} />
                        </div>
                        <div style={{display:"flex", flexDirection:"row"}}>
                            offsetX: <input type="number" value={this.state.offsetX} onChange={(e) => this.setState({offsetX: +e.target.value})} />
                            offsetY: <input type="number" value={this.state.offsetY} onChange={(e) => this.setState({offsetY: +e.target.value})} />
                        </div>
                        <div style={{display:"flex", flexDirection:"row"}}>
                            R: <input type="number" value={this.state.R} onChange={(e) => this.setState({R: +e.target.value})} />
                            G: <input type="number" value={this.state.G} onChange={(e) => this.setState({G: +e.target.value})} />
                            B: <input type="number" value={this.state.B} onChange={(e) => this.setState({B: +e.target.value})} />
                            colorStep: <input type="number" value={this.state.colorStep} onChange={(e) => this.setState({colorStep: +e.target.value})} />
                        </div>
                    </div>
                </div>

                <svg width="100vw" height="100vh">
                    {Triangles}
                </svg>
            </div>
        );
    }
}
