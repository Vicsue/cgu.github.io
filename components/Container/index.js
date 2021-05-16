import styles from "./index.module.css";

const Container = ({ bg, display, children, style }) => {
  return (
    <div
      className={styles.container}
      style={{ background: `${bg}`, display: `${display}` }}
    >
      {children}
    </div>
  );
};

export default Container;
