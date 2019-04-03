import {
  StyleSheet
} from 'aphrodite';
import {
  isMobile
} from "react-device-detect";
import { colors, fonts } from "../../settings"

const styles = StyleSheet.create({
  container: {
    width: isMobile ? "100vw" : "60vw",
    height: isMobile ? "60vh" : "100vh",
    paddingLeft: '10vw',
    paddingRight: '10vw',
    paddingTop: isMobile ? '2vh' : '10vh',
    paddingBottom: isMobile ? '2vh' : '10vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: '40px',
    color: colors.primary,
    fontFamily: fonts.comfortaa
  },
  socialContainer: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '30vh',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  socialItem: {
    width: '50px',
    height: '50px',
    borderRadius: '25px',
    border: '1px solid rgb(214, 214, 214)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subtitle: {
    color: colors.darker,
    fontFamily: fonts.comfortaa
  }
});

export default styles;