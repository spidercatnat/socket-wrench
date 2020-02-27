import { Component, cloneElement, Children } from "react";
import { filter, shareReplay } from "rxjs/operators";
import { publisher } from ".";
export * from "../constants/topics";

class Subscriber extends Component {
  state = { data: null };
  componentDidMount() {
    this.subscription = publisher
      .getMessage()
      .pipe(
        shareReplay(),
        filter(f => f.topic === this.props.topic)
        /**
         * If you want an array of the entire history, uncomment:
         *  scan((acc: any, curr: any) => [...acc, curr], [])
         */
      )
      .subscribe(msg => {
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
