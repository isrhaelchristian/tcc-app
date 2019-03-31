import { StyleSheet } from "aphrodite";

const styles = StyleSheet.create({
  container: {
    width: "30vw",
    height: "50vh",
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "column",
    marginTop: 20
  },
  mainImgContainer: {
    width: "100%",
    height: "80%",
    overflow: "hidden",
    borderRadius: 5
  },
  mainImg: {
    width: "100%",
    height: "auto"
  },
  carouselContainer: {
    width: "100%",
    height: "20%",
    display: "flex",
    flexDirection: "row"
  },
  thumbnailImgs: {
    width: "18%",
    height: "100%",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    borderRadius: 5
  },
  thumbail: {
    width: "auto",
    height: "100%",
    cursor: "pointer"
  }
});

export default styles;
