import React from "react";
import { Trail, animated } from "react-spring";
import Login from "../../components/Login";
import Register from "../../components/Register";
import LoginBanner from "../../components/LoginBanner";
import RegisterBanner from "../../components/RegisterBanner";
import { isMobile } from "react-device-detect";
import { css } from "aphrodite";
import styles from "./styles";

export default class Container extends React.PureComponent {
  state = { toggle: true };
  toggle = () => this.setState(state => ({ toggle: !state.toggle }));
  render() {
    const { toggle } = this.state;
    return (
      <div
        className={css(isMobile ? styles.containerMobile : styles.container)}
      >
        <Trail
          native
          reverse={toggle}
          initial={null}
          items={toggle ? <Login /> : <Register />}
          from={isMobile ? { opacity: 0, y: -100 } : { opacity: 0, x: -100 }}
          to={
            isMobile
              ? { opacity: toggle ? 1 : 1, y: toggle ? 0 : 60 }
              : { opacity: toggle ? 1 : 1, x: toggle ? 0 : 100 }
          }
        >
          {item => ({ y, x, opacity }) => (
            <animated.div
              style={{
                opacity,
                transform: isMobile
                  ? y.interpolate(y => `translate3d(0,${y}%,0)`)
                  : x.interpolate(x => `translate3d(${x}%,0,0)`)
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
          items={
            !toggle ? (
              <RegisterBanner toggle={this.toggle} />
            ) : (
              <LoginBanner toggle={this.toggle} />
            )
          }
          from={isMobile ? { opacity: 0, y: 0 } : { opacity: 0, x: 0 }}
          to={
            isMobile
              ? { opacity: !toggle ? 1 : 1, y: toggle ? 0 : -150 }
              : { opacity: !toggle ? 1 : 1, x: toggle ? 0 : -100 }
          }
        >
          {item => ({ y, x, opacity }) => (
            <animated.div
              style={{
                opacity,
                transform: isMobile
                  ? y.interpolate(y => `translate3d(0,${y}%,0)`)
                  : x.interpolate(x => `translate3d(${x}%,0,0)`)
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
