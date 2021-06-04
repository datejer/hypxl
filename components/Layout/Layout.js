import Header from '../Header/Header';
import styles from './Layout.module.scss';

export default function Layout({ children, current }) {
	return (
		<div className={styles.container}>
			<Header current={current} />
			<main className={styles.main}>{children}</main>
		</div>
	);
}
