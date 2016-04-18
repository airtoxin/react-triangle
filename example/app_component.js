import React, {Component} from "react"; // eslint-disable-line no-unused-vars
import ReactDom from "react-dom";
import RadioGroup from "react-radio-group";
import {TriangleGenerator} from "../lib";
import Triangle from "./triangle_component";

export default class App extends Component {
    constructor(...args) {
        super(...args);
        this.state = {
            x: 100,
            y: 100,
            width: 25,
            height: 14,
            direction: "up",
            size: 50
        };
    }

    render() {
        const generator = new TriangleGenerator(this.state);
        const Triangles = Array.from(Array(this.state.height).keys()).map((hy) => {
            return Array.from(Array(this.state.width).keys()).map((wx) => {
                const props = generator.byCoord(wx, hy);
                props.wx = wx;
                props.hy = hy;
                return (<Triangle key={`wx${wx}hy${hy}`} {...props} />);
            });
        });

        return (
            <div>
                <div>
                    <h1>react-triangle</h1>
                    <p>Install: npm install react-triangle</p>

                    <p>state: {JSON.stringify(this.state)}</p>
                    <div style={{display:"flex", flexDirection:"column"}}>
                        <div style={{display:"flex", flexDirection:"row"}}>
                            x: <input type="number" value={this.state.x} onChange={(e) => this.setState({x: +e.target.value})} />
                            y: <input type="number" value={this.state.y} onChange={(e) => this.setState({y: +e.target.value})} />
                        </div>
                        <div style={{display:"flex", flexDirection:"row"}}>
                            width: <input type="number" value={this.state.width} onChange={(e) => this.setState({width: +e.target.value})} />
                            height: <input type="number" value={this.state.height} onChange={(e) => this.setState({height: +e.target.value})} />
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
                            size: <input type="number" value={this.state.size} onChange={(e) => this.setState({size: +e.target.value})} />
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
