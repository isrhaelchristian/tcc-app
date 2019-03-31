import { StyleSheet } from "aphrodite";
import { colors, fonts } from "../../settings";

const styles = StyleSheet.create({
  container: {
    width: "15vw",
    height: "50vh",
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "flex-start",
    marginTop: 20,
    marginRight: 40,
    backgroundColor: colors.white,
    borderRadius: 3,
    padding: 10
  },
  infosContainer: {
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center"
  },
  title: {
    color: colors.darker,
    fontFamily: fonts.family,
    fontSize: "18px",
    fontWeight: "bold"
  },
  infos: {
    display: "flex",
    flexDirection: "row",
    borderTop: "1px solid",
    borderTopColor: colors.dark,
    paddingTop: 20,
    paddingBottom: 20
  },
  infosPet: {
    display: "flex",
    flexDirection: "column",
    width: "50%",
    justifyContent: "space-around",
    alignItems: "flex-start"
  },
  label: {
    color: colors.darker,
    fontFamily: fonts.family,
    fontSize: "14px"
  },
  value: {
    color: colors.darker,
    fontFamily: fonts.family,
    fontSize: "14px",
    fontWeight: "bold"
  },
  descContainer: {
    borderTop: "1px solid",
    borderTopColor: colors.dark,
    paddingTop: 20
  },
  desciption: {
    color: colors.darker,
    fontFamily: fonts.family,
    fontSize: "10pt"
  },
  publisherContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    borderTop: "1px solid",
    borderTopColor: colors.dark,
    paddingTop: 30
  },
  avatarContainer: {
    height: 40,
    width: 40,
    borderRadius: "50%",
    overflow: "hidden",
  },
  avatar: {
    width: "auto",
    height: "100%"
  },
  headerInfos: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: 20
  },
  name: {
    color: colors.darker,
    fontFamily: fonts.family,
    fontSize: "10px",
    fontWeight: "bold"
  },
  locality: {
    color: colors.darker,
    fontFamily: fonts.family,
    fontSize: "10px"
  }
});

export default styles;
