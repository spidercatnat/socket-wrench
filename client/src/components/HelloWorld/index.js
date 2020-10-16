import React from "react";
import { subscribe , withSubscription } from "../../pubsub";


export const HelloWorld = props => withSubscription((props) => <>{props.value} | {props.passedDownFromProvider}</>, props)

// Alternatively, with class notation
// class Hello extends React.Component {
//     render() {
//         console.log(this.props)
//         return <>{this.props.value} | {this.props.passedDownFromProvider}</>
//     }
// }
// export const HelloWorld = props => withSubscription(Hello, props)
