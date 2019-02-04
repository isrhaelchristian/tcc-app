import React from "react";
import { Trail, animated } from "react-spring";
import { WrappedLoginForm as LoginForm } from "../../components/LoginForm";
import "./styles.css";

export default class Container extends React.PureComponent {
  state = { toggle: true, items: [<LoginForm />] };
  toggle = () => this.setState(state => ({ toggle: !state.toggle }));
  render() {
    const { toggle, items } = this.state;
    return (
      <div
        style={{
          backgroundColor: "#247BA0",
          position: "relative",
          width: "100vw",
          height: "100vh",
          display: "flex",
          flexDirection: "row"
        }}
      >
        <Trail
          native
          reverse={toggle}
          initial={null}
          items={items}
          from={{ opacity: 0, x: -100 }}
          to={{ opacity: toggle ? 1 : 0.25, x: toggle ? 0 : 100 }}
        >
          {item => ({ x, opacity }) => (
            <animated.div
              className="box"
              onClick={this.toggle}
              style={{
                opacity,
                transform: x.interpolate(x => `translate3d(${x}%,0,0)`)
              }}
            >
              {item}
            </animated.div>
          )}
        </Trail>
        <Trail
          native
          reverse={!toggle}
          initial={null}
          items={items}
          from={{ opacity: 0, x: 0 }}
          to={{ opacity: !toggle ? 1 : 0.25, x: toggle ? 0 : -100 }}
        >
          {item => ({ x, opacity }) => (
            <animated.div
              className="box"
              onClick={this.toggle}
              style={{
                opacity,
                transform: x.interpolate(x => `translate3d(${x}%,0,0)`)
              }}
            >
              {item}
            </animated.div>
          )}
        </Trail>
      </div>
    );
  }
}
