import React from "react";
import { subscribe } from "../../pubsub/with-emitter";

export const MyComponent = props => subscribe(({ topic, value }) => {
    return <span>{value + " | "} {props.passedDown}</span>
}, props.topic);
