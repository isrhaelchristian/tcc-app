import React from "react";
import { Trail, animated } from "react-spring";
import Login from "../../pages/Login";
import { WrappedRegisterForm as RegisterForm } from "../../components/RegisterForm";
import LoginBanner from "../../components/LoginBanner";
import RegisterBanner from "../../components/RegisterBanner";

import "./styles.css";

export default class Container extends React.PureComponent {
  state = { toggle: true,};
  toggle = () => this.setState(state => ({ toggle: !state.toggle }));
  render() {
    const { toggle } = this.state;
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
          items={toggle ? <Login /> : <RegisterBanner />}
          from={{ opacity: 0, x: -100 }}
          to={{ opacity: toggle ? 1 : 1, x: toggle ? 0 : 100 }}
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
          items={!toggle ? <RegisterForm /> : <LoginBanner />}
          from={{ opacity: 0, x: 0 }}
          to={{ opacity: !toggle ? 1 : 1, x: toggle ? 0 : -100 }}
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
