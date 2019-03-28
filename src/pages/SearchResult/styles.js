import {
  StyleSheet
} from 'aphrodite';
import { fonts, colors } from '../../settings';

const styles = StyleSheet.create({
  container: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
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
    paddingRight: '1vw',
    borderBottom: '1px solid',
    borderBottomColor: colors.dark,
  },
  content: {
    width: '100vw',
    height: '92vh',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  }
});

export default styles;