import { StyleSheet } from 'aphrodite';
import { fonts, colors } from '../../settings';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: '100%',
    width: '10%',
  },
  text: {
    color: colors.dark,
    fontWeight: fonts.mediumWeight,
    margin: 0,
    fontFamily: fonts.family,
  }
});

export default styles;