import {
  StyleSheet
} from 'aphrodite';
import { fonts, colors } from '../../settings';

const styles = StyleSheet.create({
  container: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  header: {
    width: '100vw',
    height: '8vh',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: '1vw',
    paddingRight: '1vw',
    borderBottom: '1px solid',
    borderBottomColor: colors.dark,
  },
  content: {
    width: '100vw',
    height: '92vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  exploreContainer: {
    width: "100%",
    height: "20h",
    marginTop: "5vh"
  },
  exploreTitleContainer: {
    width: "100%",
    height: "5vh",
    display: "flex",
    flexDirection: 'row',
    justifyContent: "flex-start",
    alignItems: "center",
    paddingLeft: "5vw",
  },
  exploreTitle: {
    fontFamily: fonts.family,
    fontWeight: "bold",
    fontSize: "18pt",
    margin: 0
  },
  exploreItemsContainer: {
    width: "100%",
    height: "15vh",
    display: "flex",
    flexDirection: 'row',
    justifyContent: "flex-start",
    alignItems: "center",
    paddingLeft: "5vw",
  },
  exploreItemContainer: {
    width: "15vw",
    height: "10vh",
    display: "flex",
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center",
    border: "1px solid",
    borderColor: colors.dark,
    marginRight: "40px",
    borderRadius: "5px",
    boxShadow: "rgba(0, 0, 0, 0.06) 0px 2px 4px 0px"
  },
  exploreImgContainer: {
    width: "7vw",
    height: "10vh",
    overflow: "hidden"
  },
  exploreItemImg: {
    width: "7vw",
    height: "10vh",
  },
  exploreItemTitleContainer: {
    width: "8vw",
    height: "10vh",
    display: "flex",
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center",
  },
  exploreItemTitle: {
    color: colors.darker,
    fontWeight: "bold",
    fontSize: "12pt",
    fontFamily: fonts.family,
    margin: 0
  }
});

export default styles;