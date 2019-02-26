import {
  StyleSheet
} from 'aphrodite';
import { fonts, colors } from '../../settings';

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
    borderRadius: 5,
    boxShadow: 'box-shadow: 0 0 0 0 rgba(0,0,0,0.80)'
  },
  formTitle:{
    color: colors.darker,
    fontFamily: fonts.family,
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