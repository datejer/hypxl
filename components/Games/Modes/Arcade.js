import Game from '../../Game/Game';

import styles from '../Games.module.scss';

export default function Arcade({ data }) {
	return (
		<Game name="Arcade">
			<div>
				<span className={styles.bold}>Coins: </span> {data.coins}
			</div>
			<div>
				<span className={styles.bold}>Wins: </span> {data.wins}
			</div>
			<div>
				<span className={styles.bold}>Kills: </span> {data.kills}
			</div>
		</Game>
	);
}
