import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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
        <Link to="/" className={css(styles.menuItem)}>
          <p href="#" className={css(styles.itemText)}>Anunciar</p>
        </Link>
        <Link to="/" className={css(styles.menuItem)}>
          <p href="#" className={css(styles.itemText)}>Abrigos</p>
        </Link>
        <Link to="/" className={css(styles.menuItem)}>
          <p href="#" className={css(styles.itemText)}>Fórum</p>
        </Link>
        <Link to="/" className={css(styles.menuItem)}>
          <p href="#" className={css(styles.itemText)}>Sobre Nós</p>
        </Link>
        <Link to="/login" className={css(styles.menuItem)}>
          <p href="#" className={css(styles.itemText)}>Cadastrar / Entrar</p>
        </Link>
      </div>
    );
  }
}
