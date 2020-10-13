import React from "react";
import { subscribe } from "../../pubsub";

export const HelloWorld = props => subscribe(({ topic, data }) => {
    return <span>{data} | {props.passedDownFromProvider} <br /> I am listening to the {topic} topic. </span>
}, props.topic);


// Or, alternatively, using class notation
//
// class HelloWorld extends Component {
//     render() {
//         const { props: { passedDownFromProvider, topic } } = this;
//         return subscribe(({ data }) => {
//             return <span>{data} | {passedDownFromProvider} <br /> I am listening to the {topic} topic. </span>
//         }, topic)
//     }
// }

// export { HelloWorld }
