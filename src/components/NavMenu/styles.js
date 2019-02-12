import { StyleSheet } from 'aphrodite';
import { fonts, colors } from '../../settings';

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
    color: colors.darker,
    fontWeight: fonts.mediumWeight,
    margin: 0,
    fontFamily: fonts.family,
    ':hover': {
      display: 'inline-block',
      borderBottom: '1px solid transparent',
      transition: 'border 0.2s ease 0.2s',
      borderBottomColor: colors.primary
    }
  }
})

export default styles;