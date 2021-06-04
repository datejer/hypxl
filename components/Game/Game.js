import styles from './Game.module.scss';

export default function Game({ name, children }) {
	return (
		<div className={styles.game}>
			<svg className={styles.gameCollapse} viewBox="0 0 24 24">
				<path
					fill="currentColor"
					d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"
				/>
			</svg>
			<h4 className={styles.name}>{name}</h4>
			<div className={styles.contents}>{children}</div>
		</div>
	);
}
