import { Component, cloneElement, Children } from "react";
import { publisher } from ".";

class Subscriber extends Component {
    state = { data: null };
    
    componentDidMount() {
        this.subscription = publisher
            .subscribe(this.props.topic, msg => {
                this.setState({ data: msg.data });
            });
        this.unsubscribe = () => this.subscription.unsubscribe();
    }

    componentWillUnmount() {
        this.unsubscribe();
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
