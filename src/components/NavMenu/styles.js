import { StyleSheet } from 'aphrodite';
import { fonts, colors } from '../../settings';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '40%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuItem: {
    width: '20%',
    height: '100%',
    display: 'flex',
    paddingTop: '4vh',
    justifyContent: 'center',
  },
  itemText: {
    color: colors.white,
    fontWeight: 'bold',
    margin: 0,
    fontFamily: fonts.family,
    ':hover': {
      borderBottom: '2px solid',
      borderBottomColor: colors.white,
    }
  }
})

export default styles;