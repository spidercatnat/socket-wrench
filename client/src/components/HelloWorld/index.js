import React from "react";
import { subscribe } from "../../pubsub";

export const HelloWorld = props => subscribe(({ topic, data }) => {
    return <span>{data || ""} | {props.passedDownFromProvider} <br /> I am listening to the {topic} topic. </span>
}, props.topic);

