import styles from "./rectangle-component.module.css";

const RectangleComponent = ({ onRectangleButtonClick }) => {
  return (
    <button className={styles.rectangleParent} onClick={onRectangleButtonClick}>
      <div className={styles.componentChild} />
      <div className={styles.getStarted}>Get Started</div>
    </button>
  );
};

export default RectangleComponent;
