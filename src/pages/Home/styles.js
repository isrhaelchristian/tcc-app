import {
  StyleSheet
} from 'aphrodite';

const backHome = require('../../assets/img/header-back.jpg')

const styles = StyleSheet.create({
  container: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    backgroundImage: `url(${backHome})`,
    backgroundSize: '100vw 100vh',
    flexDirection: 'column',
  },
  header: {
    width: '100vw',
    height: '8vh',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: '1vw',
    paddingRight: '1vw'
  },
  content: {
    width: '100vw',
    height: '92vh',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: '10vw',
    paddingRight: '1vw'
  }
});

export default styles;