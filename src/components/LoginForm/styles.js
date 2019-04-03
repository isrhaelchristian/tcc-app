import {
  StyleSheet
} from 'aphrodite';
import { colors, fonts } from "../../settings";

const styles = StyleSheet.create({
  form: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  formItem: {
    width: '100%',
    fontFamily: fonts.comfortaa
  },
  actions: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  forgot: {
    color: 'rgb(112, 112, 112)',
    fontWeight: 600
  }
});

export default styles;