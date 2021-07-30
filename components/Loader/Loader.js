import styles from "./Loader.module.scss";

function Loader({ size }) {
	return <div className={styles.dotflashing} style={{ fontSize: size }}></div>;
}

export default Loader;
