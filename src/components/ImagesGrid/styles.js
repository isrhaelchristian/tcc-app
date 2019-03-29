import {
  StyleSheet
} from 'aphrodite';
import { colors } from '../../settings';

const styles = StyleSheet.create({
  container: {
    width: '100vw',
    height: "60vh",
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  gridBg: {
    width: "50%",
    height: "100%",
    overflow: "hidden"
  },
  gridSm: {
    width: "25%",
    height: "100%",
    overflow: "hidden"
  },
  imgBg: {
    width: "100%",
    height: "auto"
  },
  imgSm: {
    width: "100%",
    height: "50%",
  },
});

export default styles;