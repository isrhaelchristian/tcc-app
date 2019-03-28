import React, { Component } from 'react'
import { css } from 'aphrodite'
import styles from './styles'

import SearchResultItem from "../SearchResultItem"

export default class SearchResult extends Component {

  constructor() {
    super()
    this.state = {
      data: [
        {
          id: "1",
          img: "http://twixar.me/0R0K",
          title: "Gato 1",
          gender: "Macho",
          kind: "Gato",
          age: "Jovem",
          address: "Fortaleza - CE",
        },
        {
          id: "2",
          img: "http://twixar.me/0R0K",
          title: "Gato 2",
          gender: "Macho",
          kind: "Gato",
          age: "Jovem",
          address: "Fortaleza - CE",
        },
        {
          id: "1",
          img: "http://twixar.me/0R0K",
          title: "Gato 1",
          gender: "Macho",
          kind: "Gato",
          age: "Jovem",
          address: "Fortaleza - CE",
        },
        {
          id: "1",
          img: "http://twixar.me/0R0K",
          title: "Gato 1",
          gender: "Macho",
          kind: "Gato",
          age: "Jovem",
          address: "Fortaleza - CE",
        },
        {
          id: "1",
          img: "http://twixar.me/0R0K",
          title: "Gato 1",
          gender: "Macho",
          kind: "Gato",
          age: "Jovem",
          address: "Fortaleza - CE",
        },
        {
          id: "1",
          img: "http://twixar.me/0R0K",
          title: "Gato 1",
          gender: "Macho",
          kind: "Gato",
          age: "Jovem",
          address: "Fortaleza - CE",
        },
        {
          id: "1",
          img: "http://twixar.me/0R0K",
          title: "Gato 1",
          gender: "Macho",
          kind: "Gato",
          age: "Jovem",
          address: "Fortaleza - CE",
        },
        {
          id: "1",
          img: "http://twixar.me/0R0K",
          title: "Gato 1",
          gender: "Macho",
          kind: "Gato",
          age: "Jovem",
          address: "Fortaleza - CE",
        },
        {
          id: "1",
          img: "http://twixar.me/0R0K",
          title: "Gato 1",
          gender: "Macho",
          kind: "Gato",
          age: "Jovem",
          address: "Fortaleza - CE",
        },
        {
          id: "1",
          img: "http://twixar.me/0R0K",
          title: "Gato 1",
          gender: "Macho",
          kind: "Gato",
          age: "Jovem",
          address: "Fortaleza - CE",
        },
        {
          id: "1",
          img: "http://twixar.me/0R0K",
          title: "Gato 1",
          gender: "Macho",
          kind: "Gato",
          age: "Jovem",
          address: "Fortaleza - CE",
        },
        {
          id: "1",
          img: "http://twixar.me/0R0K",
          title: "Gato 1",
          gender: "Macho",
          kind: "Gato",
          age: "Jovem",
          address: "Fortaleza - CE",
        },
        {
          id: "1",
          img: "http://twixar.me/0R0K",
          title: "Gato 1",
          gender: "Macho",
          kind: "Gato",
          age: "Jovem",
          address: "Fortaleza - CE",
        },
        {
          id: "1",
          img: "http://twixar.me/0R0K",
          title: "Gato 1",
          gender: "Macho",
          kind: "Gato",
          age: "Jovem",
          address: "Fortaleza - CE",
        },
        {
          id: "1",
          img: "http://twixar.me/0R0K",
          title: "Gato 1",
          gender: "Macho",
          kind: "Gato",
          age: "Jovem",
          address: "Fortaleza - CE",
        },
        {
          id: "1",
          img: "http://twixar.me/0R0K",
          title: "Gato 1",
          gender: "Macho",
          kind: "Gato",
          age: "Jovem",
          address: "Fortaleza - CE",
        },
      ]
    }
  }

  render() {
    return (
      <div className={css(styles.resultContainer)}>
        <div className={css(styles.resultTitleContainer)}>
          <p className={css(styles.resultTitle)}>Resultados</p>
        </div>
        <div className={css(styles.resultItemsContainer)}>
          {
            this.state.data.map(item => (
              <SearchResultItem item={item} />
            ))
          }
        </div>
      </div>
    );
  }
}
