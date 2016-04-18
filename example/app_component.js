import React, {Component} from "react"; // eslint-disable-line no-unused-vars
import ReactDom from "react-dom";
import RadioGroup from "react-radio-group";
import Triangle, {TriangleGenerator} from "../lib";

export default class App extends Component {
    constructor(...args) {
        super(...args);
        this.state = {
            x: 400,
            y: 100,
            direction: "up",
            size: 50
        };
    }

    render() {
        const generator = new TriangleGenerator(this.state);
        const Triangles = Array.from(Array(10).keys()).map((i) => {
            return Array.from(Array(10).keys()).map((j) => {
                const props = generator.byCoord(j, i);
                return (<Triangle key={`i${i}j${j}`} {...props} />);
            });
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
