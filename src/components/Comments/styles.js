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
});

export default styles;
