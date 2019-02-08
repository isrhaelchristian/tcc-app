import React from "react";
import { css } from "aphrodite";
import styles from "./styles";

const index = props => {
  return (
    <button className={css(styles.buttonSignUp)} onClick={props.toggle}>
      <p className={css(styles.btnText)}>{props.text}</p>
    </button>
  );
};

export default index;
