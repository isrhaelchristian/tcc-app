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
          <p href="#" className={css(styles.itemText)}>Anunciar</p>
        </div>
        <div className={css(styles.menuItem)}>
          <p href="#" className={css(styles.itemText)}>Abrigos</p>
        </div>
        <div className={css(styles.menuItem)}>
          <p href="#" className={css(styles.itemText)}>Fórum</p>
        </div>
        <div className={css(styles.menuItem)}>
          <p href="#" className={css(styles.itemText)}>Sobre Nós</p>
        </div>
        <div className={css(styles.menuItem)}>
          <p href="#" className={css(styles.itemText)}>Cadastrar / Entrar</p>
        </div>
      </div>
    );
  }
}
