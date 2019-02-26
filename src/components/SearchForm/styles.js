import {
  StyleSheet
} from 'aphrodite';

const styles = StyleSheet.create({
  form: {
    width: '30vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
    paddingTop: 15,
    paddingLeft: 30,
    paddingRight: 30,
  },
  formTitle:{
    color: '#000',
    fontSize: '22px',
    fontWeight: 'bold',
  },  
  formItem: {
    width: '100%',
  },
  actions: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
});

export default styles;