import {
  StyleSheet
} from 'aphrodite';

const styles = StyleSheet.create({
  container: {
    width: '50vw',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'column',
    paddingLeft: '10vw',
    paddingRight: '10vw',
    paddingTop: '20vh',
    paddingBottom: '40vh',
    backgroundColor: '#3AB19B',
  },
  title: {
    fontSize: '40px',
    color: '#FFFFFF',
  },
  subtitle: {
    fontSize: '18px',
    color: '#FFFFFF',
    textAlign: 'center',
  }
});

export default styles;