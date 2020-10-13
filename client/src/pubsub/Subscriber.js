import { Component, cloneElement, Children } from "react";
import { publisher } from ".";

class Subscriber extends Component {
    state = publisher.getState(this.props.topic) // get initial state

    onMessage = msg => {
        this.setState({ ...msg });
        return this.state;
    }

    componentDidMount() {
        this.subscription = publisher
            .subscribe(this.props.topic, this.onMessage);
    }
    
    componentWillUnmount() {
        publisher.unsubscribe(this.props.topic, this.onMessage);
    }

    render() {
        const {
            state: { data },
            props: { children }
        } = this;
        return Children.map(children, child =>
            cloneElement(child, { ...this.props, data })
        );
    }
}
export { Subscriber };
