import {
  StyleSheet
} from 'aphrodite';
import {
  isMobile
} from "react-device-detect";

const styles = StyleSheet.create({
  container: {
    width: isMobile ? "100vw" : "50vw",
    height: isMobile ? "40vh" : "100vh",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'column',
    paddingLeft: '10vw',
    paddingRight: '10vw',
    paddingTop: isMobile ? '5vh' : '20vh',
    paddingBottom:  isMobile ? '5vh' : '40vh',
    backgroundColor: '#3AB19B',
  },
  title: {
    fontSize: '40px',
    color: '#FFFFFF',
  },
  subtitle: {
    fontSize: '18px',
    color: '#FFFFFF',
    textAlign: 'center',
  }
});

export default styles;