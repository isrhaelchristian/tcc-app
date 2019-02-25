import {
  StyleSheet
} from 'aphrodite';
import { colors } from '../../settings';

const styles = StyleSheet.create({
  container: {
    width: '35%',
    height: '60%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  input: {
    height: '100%',
    paddingLeft: 10,
    border: 0,
    borderTopLeftRadius: 7,
    borderBottomLeftRadius: 7,
    borderLeft: `1px solid ${colors.dark}`,
    borderBottom: `1px solid ${colors.dark}`,
    borderTop: `1px solid ${colors.dark}`,
    '::placeholder': {
      color: colors.dark,
    }
  },
  select: {
    height: '100%',
    border: 0,
    borderBottom: `1px solid ${colors.dark}`,
    borderTop: `1px solid ${colors.dark}`,
  },
  selectItem: {
    ':hover': {
      color: colors.primary,
      backgroundColor: colors.white
    }
  },
  button: {
    height: '100%',
    width: '12%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    borderLeft: `1px solid ${colors.dark}`,
    borderBottom: `1px solid ${colors.dark}`,
    borderTop: `1px solid ${colors.dark}`,
    borderRight: `1px solid ${colors.dark}`,
    borderTopRightRadius: 7,
    borderBottomRightRadius: 7,
  }
});

export default styles;