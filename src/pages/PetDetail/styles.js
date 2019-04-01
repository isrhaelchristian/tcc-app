import { StyleSheet } from "aphrodite";
import { colors } from "../../settings";

const styles = StyleSheet.create({
  container: {
    width: "100vw",
    display: "flex",
    alignContent: "center",
    justifyContent: "flex-start",
    flexDirection: "column",
    backgroundColor: colors.dark,
    minHeight: "100vh"
  },
  header: {
    width: "100vw",
    height: "8vh",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: "1vw",
    paddingRight: "1vw",
    borderBottom: "1px solid",
    borderBottomColor: colors.dark,
    backgroundColor: colors.white
  },
  content: {
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  row: {
    width: "100vw",
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center"
  }
});

export default styles;
