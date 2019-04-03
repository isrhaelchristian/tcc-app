import { StyleSheet } from "aphrodite";
import { colors, fonts } from "../../settings";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "flex-start",
    marginTop: 40,
    backgroundColor: colors.white,
    borderRadius: 4,
    padding: 10
  },
  commentContainer: {
    width: "100%",
    padding: 10
  },
  headerContainer: {
    width: "100%",
    display: 'flex',
    alignItems: 'center',
    marginBottom: 10
  },
  headerIcon: {
    fontSize: "20pt",
    color: colors.primary,
    marginRight: 10
  },
  headerText: {
    color: colors.primary,
    fontFamily: fonts.comfortaa,
    fontSize: "14pt",
    fontWeight: 'bold',
  },
  footerContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 15
  },
  charNumber: {
    color: "#ccc8c6",
    fontFamily: fonts.comfortaa,
    fontSize: "12pt"
  },
  rules: {
    color: colors.primary,
    fontFamily: fonts.comfortaa,
    fontSize: "12pt",
    marginRight: 10,
    cursor: 'pointer',
    ":hover": {
      color: colors.primaryDark,
    }
  },
  sendButton: {
    backgroundColor: colors.white,
    color: colors.primary,
    fontSize: "12pt",
    borderRadius: 4,
    border: "1px solid",
    borderColor: colors.dark,
    padding: 10,
    cursor: 'pointer',
    ":hover": {
      color: colors.primaryDark,
      borderColor: colors.dark,
    }
  }
});

export default styles;
