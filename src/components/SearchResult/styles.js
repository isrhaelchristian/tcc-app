import { StyleSheet } from "aphrodite";
import { fonts } from "../../settings";

const styles = StyleSheet.create({
  resultContainer: {
    width: "100%",
    marginTop: "5vh"
  },
  resultTitleContainer: {
    width: "100%",
    height: "5vh",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingLeft: "5vw"
  },
  resultTitle: {
    fontFamily: fonts.comfortaa,
    fontWeight: "bold",
    fontSize: "18pt",
    margin: 0
  },
  resultItemsContainer: {
    maxWidth: "100vw",
    overflowX: "unset",
    display: "flex",
    flexDirection: "row",
    justifyContent: 'space-between',
    flexWrap: "wrap",
    paddingLeft: "5vw",
    paddingRight: "5vw"
  }
});

export default styles;
