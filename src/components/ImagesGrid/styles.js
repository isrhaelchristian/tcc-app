import {
  StyleSheet
} from 'aphrodite';

const styles = StyleSheet.create({
  container: {
    width: '30vw',
    height: "50vh",
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  mainImgContainer: {
    width: '100%',
    height: "70%",
    overflow: "hidden"
  },
  mainImg: {
    width: '100%',
    height: 'auto',
  },
  carouselContainer: {
    width: "100%",
    height: "30%",
    display: 'flex',
    flexDirection: 'row',
  },
  thumbnailImgs: {
    width: "20%",
    height: "100%",
    overflow: 'hidden',
  },
  thumbail: {
    width: 'auto',
    height: "100%",
  }
});

export default styles;