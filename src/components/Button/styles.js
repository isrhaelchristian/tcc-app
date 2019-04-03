import {
  StyleSheet
} from 'aphrodite';
import { colors, fonts } from "../../settings";

const styles = StyleSheet.create({
  buttonSignUp: {
    width: '16vw',
    height: '8vh',
    borderRadius: '4vh',
    backgroundColor: '#3AB19B',
    border: '2px solid #FFFFFF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: colors.white,
    fontSize: '20pt',
    marginBottom: 0,
    fontFamily: fonts.comfortaa
  }
});

export default styles;