import React from "react";
import { Trail, animated } from "react-spring";
import Login from "../../components/Login";
import Register from "../../components/Register";
import LoginBanner from "../../components/LoginBanner";
import RegisterBanner from "../../components/RegisterBanner";

import "./styles.css";

export default class Container extends React.PureComponent {
  state = { toggle: true };
  toggle = () => this.setState(state => ({ toggle: !state.toggle }));
  render() {
    const { toggle } = this.state;
    return (
      <div
        style={{
          backgroundColor: "#FFF",
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
          items={toggle ? <Login /> : <Register />}
          from={{ opacity: 0, x: -100 }}
          to={{ opacity: toggle ? 1 : 1, x: toggle ? 0 : 100 }}
        >
          {item => ({ x, opacity }) => (
            <animated.div
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
          items={!toggle ? <RegisterBanner toggle={this.toggle}/> : <LoginBanner toggle={this.toggle}/>}
          from={{ opacity: 0, x: 0 }}
          to={{ opacity: !toggle ? 1 : 1, x: toggle ? 0 : -100 }}
        >
          {item => ({ x, opacity }) => (
            <animated.div
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
