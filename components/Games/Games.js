import styles from './Games.module.scss';

import Arcade from './Arcade/Arcade';

export default function Games({ player }) {
	return (
		<div className={styles.games}>
			<Arcade data={player.stats.Arcade} />
		</div>
	);
}
