import Header from "../components/header";
import styles from "../styles/Layout.module.css";

export default function Layout({ children, current }) {
	return (
		<div className={styles.container}>
			<Header current={current} />
			<main className={styles.main}>{children}</main>
		</div>
	);
}
