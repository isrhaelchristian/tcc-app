import {
  StyleSheet
} from 'aphrodite';
import {
  isMobile
} from "react-device-detect";
import { colors, fonts } from "../../settings";

const styles = StyleSheet.create({
  container: {
    width: isMobile ? "100vw" : "40vw",
    height: isMobile ? "40vh" : "100vh",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'column',
    paddingLeft: '5vw',
    paddingRight: '5vw',
    paddingTop: isMobile ? '5vh' : '20vh',
    paddingBottom: isMobile ? '5vh' : '40vh',
    backgroundColor: '#3AB19B',
  },
  title: {
    fontSize: '40pt',
    color: colors.white,
    fontFamily: fonts.comfortaa
  },
  subtitle: {
    fontSize: '18pt',
    color: colors.white,
    fontFamily: fonts.comfortaa,
    textAlign: 'center',
  }
});

export default styles;