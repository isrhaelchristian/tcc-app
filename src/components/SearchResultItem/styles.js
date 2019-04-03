import { StyleSheet } from "aphrodite";

import { colors, fonts } from "../../settings";

const styles = StyleSheet.create({
  container: {
    width: 300,
    marginRight: 20,
    marginBottom: 20,
    boxShadow: "rgba(0, 0, 0, 0.06) 0px 2px 4px 0px"
  },
  cardBody: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center"
  },
  cardTitle: {
    color: colors.darker,
    fontFamily: fonts.comfortaa,
    fontWeight: "bold",
    margin: 0
  },
  cardTagsContainer: {
    width: "100%",
    height: "35%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  tagContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: colors.primary,
    borderRadius: 15
  },
  tagText: {
    color: colors.white,
    fontFamily: fonts.comfortaa,
    margin: 0
  },
  addressText: {
    color: colors.darker,
    fontFamily: fonts.comfortaa,
    fontWeight: "bold",
    margin: 0
  }
});

export default styles;
