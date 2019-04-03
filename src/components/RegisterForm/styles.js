import {
  StyleSheet
} from 'aphrodite';
import { fonts } from "../../settings";

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
  }
});

export default styles;