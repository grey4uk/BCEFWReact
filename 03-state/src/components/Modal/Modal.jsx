const styles = {
  imgStyle: {
    display: "block",
    width: "60vw",
    borderRadius: "2vh",
  },
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "fixed",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    background: "rgba(0,0,0,.4)",
  },
};

const Modal = ({ img, onClose }) => {
  return (
    <div
      style={styles.wrapper}
      onClick={() => onClose(null)}>
      <img
        src={img.path}
        alt={img.alt}
        style={styles.imgStyle}
      />
    </div>
  );
};

export default Modal;
