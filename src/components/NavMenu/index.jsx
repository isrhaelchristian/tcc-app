import React, { Component } from 'react'
import { css } from 'aphrodite'
import styles from './styles'

export default class NavMenu extends Component {
  state = {
    current: 'mail',
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  render() {
    return (
      <div className={css(styles.container)}>
        <div className={css(styles.menuItem)}>
          <a href="#" className={css(styles.itemText)}>Anunciar</a>
        </div>
        <div className={css(styles.menuItem)}>
          <a href="#" className={css(styles.itemText)}>Abrigos</a>
        </div>
        <div className={css(styles.menuItem)}>
          <a href="#" className={css(styles.itemText)}>Fórum</a>
        </div>
        <div className={css(styles.menuItem)}>
          <a href="#" className={css(styles.itemText)}>Sobre Nós</a>
        </div>
      </div>
    );
  }
}
