import React from "react";

export const HelloWorld = props => <span>{props.hello_socketio}</span>

// PubSub example:
// import { Subscribe } from "../../pubsub";
// export const HelloWorld = props => {
//   return subscribe(({ topic, data }) => {
//     return <span>{data}</span>
//   }, props.topic);
// };

// Then use this component elsewhere:
// <HelloWorld topic={MY_TOPIC} {...anyOtherProps} />