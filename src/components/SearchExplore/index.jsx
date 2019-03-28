import React, { Component } from 'react'
import { css } from 'aphrodite'
import styles from './styles'

const sheltersImg = "https://images.unsplash.com/photo-1545305948-59e8b64b8264?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1398&q=80";
const dogsIMg = "https://images.unsplash.com/photo-1444212477490-ca407925329e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80";
const catsIMg = "https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1348&q=80";

export default class SearchExplore extends Component {

  render() {
    return (
      <div className={css(styles.exploreContainer)}>
        <div className={css(styles.exploreTitleContainer)}>
          <p className={css(styles.exploreTitle)}>Explorar Localidade</p>
        </div>
        <div className={css(styles.exploreItemsContainer)}>
          <div className={css(styles.exploreItemContainer)}>
            <div className={css(styles.exploreImgContainer)}>
              <img alt="shelters" src={sheltersImg} className={css(styles.exploreItemImg)} />
            </div>
            <div className={css(styles.exploreItemTitleContainer)}>
              <p className={css(styles.exploreItemTitle)}>Abrigos</p>
            </div>
          </div>
          <div className={css(styles.exploreItemContainer)}>
            <div className={css(styles.exploreImgContainer)}>
              <img alt="shelters" src={dogsIMg} className={css(styles.exploreItemImg)} />
            </div>
            <div className={css(styles.exploreItemTitleContainer)}>
              <p className={css(styles.exploreItemTitle)}>Cães</p>
            </div>
          </div>
          <div className={css(styles.exploreItemContainer)}>
            <div className={css(styles.exploreImgContainer)}>
              <img alt="shelters" src={catsIMg} className={css(styles.exploreItemImg)} />
            </div>
            <div className={css(styles.exploreItemTitleContainer)}>
              <p className={css(styles.exploreItemTitle)}>Gatos</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
