import {
  StyleSheet
} from 'aphrodite';
import { colors } from '../../../settings';

const styles = StyleSheet.create({
  container: {
    width: '50%',
    height: '60%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingRight: '25%'
  },
  input: {
    height: '100%',
    width: '85%',
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
  button: {
    height: '100%',
    width: '15%',
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