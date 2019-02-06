import {
  StyleSheet
} from 'aphrodite';

const styles = StyleSheet.create({
  containerLogin: {
    width: "50vw",
    height: '100vh',
    paddingLeft: '10vw',
    paddingRight: '10vw',
    paddingTop: '10vh',
    paddingBottom: '10vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginTitle: {
    fontSize: '40px',
    color: '#3AB19B',
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
  form: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  formItem: {
    width: '100%',
  },
  loginActions: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  loginForgot: {
    color: 'rgb(112, 112, 112)',
    fontWeight: 600
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
    color: '#CCC'
  }
});

export default styles;