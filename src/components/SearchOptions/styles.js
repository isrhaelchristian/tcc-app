import { StyleSheet } from "aphrodite";
import { fonts, colors } from "../../settings";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "5vh",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    borderBottom: "1px solid",
    borderBottomColor: colors.dark,
    paddingLeft: "5vw",
    paddingRight: "5vw"
  },
  optionsItem: {
    backgroundColor: colors.primary,
    color: colors.white,
    fontFamily: fonts.family,
    border: "0px",
    height: "70%",
    borderRadius: 3,
    marginRight: "1%",
    paddingLeft: 15,
    paddingRight: 15,
    ":hover": {
      backgroundColor: colors.primaryDark
    }
  },
  popoverHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%"
  },
  popoverTitle: {
    margin: 0,
    fontWeight: "bold",
    fontFamily: fonts.family,
    color: colors.darker
  }
});

export default styles;
