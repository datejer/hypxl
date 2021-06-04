import { Tooltip } from 'react-tippy';
import { getHtmlFormat } from '../../utils/format';
import { getCoinMultiplier } from '../../utils/multiplier';
import Socials from '../Socials/Socials';

import styles from './Stats.module.scss';

export default function Stats({ player }) {
	return (
		<div className={styles.stats}>
			<div className={styles.player}>
				<img
					src={`https://visage.surgeplay.com/bust/${player.uuid}`}
					className={styles.bust}
				/>
				<Tooltip title={player.uuid} animation="shift" animateFill={false}>
					<h1 className={styles.username}>
						{getHtmlFormat(`${player.rank_formatted} ${player.username}`)}
					</h1>
				</Tooltip>
				<Tooltip
					title={player.online ? 'Online' : 'Offline'}
					animation="shift"
					animateFill={false}
					arrow="true"
				>
					<span
						className={styles.indicator}
						style={{
							backgroundColor: player.online ? 'lightgreen' : 'orangered',
						}}
					></span>
				</Tooltip>
			</div>
			<div className={styles.info}>
				<div>
					<span className={styles.bold}>Level: </span>{' '}
					{Math.floor(player.level)}
				</div>
				<div>
					<span className={styles.bold}>Coin multiplier: </span>{' '}
					{getCoinMultiplier(Math.floor(player.level))}x
				</div>
				<div>
					<span className={styles.bold}>Experience: </span> {player.exp}
				</div>
				<div>
					<span className={styles.bold}>Achievement points: </span>{' '}
					{player.achievement_points}
				</div>
				<div>
					<span className={styles.bold}>Quests completed: </span>{' '}
					{player.quests_completed}
				</div>
				<br />
				<div>
					<span className={styles.bold}>First login: </span>{' '}
					{new Date(player.first_login).toLocaleString()}
				</div>
				<div>
					<span className={styles.bold}>Last login: </span>{' '}
					{new Date(player.last_login).toLocaleString()}
				</div>
				<div>
					<span className={styles.bold}>Last logout: </span>{' '}
					{new Date(player.last_logout).toLocaleString()}
				</div>
				<div>
					<span className={styles.bold}>Last game: </span> {player.last_game}
				</div>
				<br />
				<div>
					<span className={styles.bold}>Gifts sent: </span> {player.gifts_sent}
				</div>
				<div>
					<span className={styles.bold}>Gifts received: </span>{' '}
					{player.gifts_received}
				</div>
				<br />
				<div>
					<span className={styles.bold}>Current reward streak: </span>{' '}
					{player.rewards.streak_current}
				</div>
				<div>
					<span className={styles.bold}>Best reward streak: </span>{' '}
					{player.rewards.streak_best}
				</div>
			</div>
			<Socials player={player} />
		</div>
	);
}
