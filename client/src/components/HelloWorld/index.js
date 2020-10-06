import React from "react";

// export const HelloWorld = props => <span>{props.hello_socketio}</span>

// PubSub example:
import { subscribe } from "../../pubsub/with-emitter";
export const HelloWorld = props => subscribe(({ topic, data }) => {
    return <span>{topic}: {data} | {props.hello_socketio}</span>
}, props.topic);

// Then use this component elsewhere:
// <HelloWorld topic={MY_TOPIC} {...anyOtherProps} />