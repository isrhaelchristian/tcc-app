import { StyleSheet } from "aphrodite";
import { colors, fonts } from "../../settings";

const styles = StyleSheet.create({
  container: {
    width: "15vw",
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "flex-start",
    marginTop: 20,
    marginLeft: 40,
    backgroundColor: colors.white,
    borderRadius: 4,
    padding: 10
  },
  actionsContainer: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "flex-start",
  },
  getButton: {
    backgroundColor: colors.primary,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 20,
    borderRadius: 4,
    border: "0px",
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 20,
    cursor: 'pointer',
  },
  getText: {
    color: colors.white,
    fontFamily: fonts.family,
    fontSize: "14px",
    marginLeft: 15
  },
  donateButton: {
    backgroundColor: colors.white,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 20,
    border: "1px solid",
    borderColor: colors.primary,
    borderRadius: 4,
    paddingTop: 10,
    paddingBottom: 10,
    cursor: 'pointer',
  },
  donateText: {
    color: colors.primary,
    fontFamily: fonts.family,
    fontSize: "14px",
    marginLeft: 15
  },
  getIcon: {
    fontSize: "18px",
    color: colors.white
  },
  donateIcon: {
    fontSize: "18px",
    color: colors.primary
  },
  followContainer: {
    width: "100%",
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    borderTop: "1px solid",
    borderTopColor: colors.dark,
    paddingTop: 20
  },
  followText: {
    color: colors.darker,
    fontFamily: fonts.family,
    fontSize: "14px",
  },
  switchChecked: {
    backgroundColor: colors.primary
  },
  switchUnchecked: {
    backgroundColor: colors.dark
  }
});

export default styles;
