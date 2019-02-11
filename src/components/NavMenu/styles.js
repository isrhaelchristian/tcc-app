import { StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '30%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  menuItem: {
    width: '25%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemText: {
    fontWeight: '500',
    margin: 0,
    fontFamily: 'proxima-nova, sans-serif',
  }
})

export default styles;