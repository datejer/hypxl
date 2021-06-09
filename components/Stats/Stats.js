import { Tooltip } from 'react-tippy';
import Image from 'next/image';
import { getHtmlFormat, formatBigNumber } from '../../utils/format';
import { getCoinMultiplier } from '../../utils/multiplier';
import Socials from '../Socials/Socials';

import styles from './Stats.module.scss';

export default function Stats({ player }) {
	return (
		<div className={styles.stats}>
			<div
				className={styles.player}
				style={player.rank === null ? { height: '90px' } : {}}
			>
				<span
					className={`${styles.avatar} ${
						player.rank === null
							? styles.non
							: player.rank === 'VIP'
							? styles.vip
							: player.rank === 'VIP_PLUS'
							? styles.vipPlus
							: player.rank === 'MVP'
							? styles.mvp
							: player.rank === 'MVP_PLUS'
							? styles.mvpPlus
							: player.rank === 'MVP_PLUS_PLUS'
							? styles.mvpPlusPlus
							: player.rank === 'YOUTUBER'
							? styles.youtuber
							: player.rank === 'HELPER'
							? styles.helper
							: player.rank === 'MODERATOR'
							? styles.moderator
							: player.rank === 'BUILD_TEAM'
							? styles.buildTeam
							: player.rank === 'GAME_MASTER'
							? styles.gameMaster
							: player.rank === 'ADMIN'
							? styles.admin
							: ''
					}`}
				>
					<div className={styles.bust}>
						<Image
							src={`https://visage.surgeplay.com/bust/${player.uuid}`}
							alt={player.username}
							width={90}
							height={90}
						/>
					</div>
				</span>
				<Tooltip
					title={player.uuid}
					animation="shift"
					animateFill={false}
					arrow="true"
				>
					<h1 className={styles.username}>
						{getHtmlFormat(`${player.rank_formatted} ${player.username}`)}
					</h1>
				</Tooltip>
				<span style={{ marginLeft: '1em' }}>
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
				</span>
			</div>
			<div className={styles.info}>
				<div>
					<span className={styles.bold}>Level: </span> {player.level}
				</div>
				<div>
					<span className={styles.bold}>Coin multiplier: </span>{' '}
					{getCoinMultiplier(Math.floor(player.level))}x
				</div>
				<div>
					<span className={styles.bold}>Experience: </span>{' '}
					{formatBigNumber(player.exp)}
				</div>
				<div>
					<span className={styles.bold}>Karma: </span>{' '}
					{formatBigNumber(player.karma)}
				</div>
				<div>
					<span className={styles.bold}>Achievement points: </span>{' '}
					{formatBigNumber(player.achievement_points)}
				</div>
				<div>
					<span className={styles.bold}>Quests completed: </span>{' '}
					{formatBigNumber(player.quests_completed)}
				</div>
				<br />
				{player.first_login !== null ? (
					<div>
						<span className={styles.bold}>First login: </span>{' '}
						{new Date(player.first_login).toLocaleString()}
					</div>
				) : (
					''
				)}
				{player.last_login !== null ? (
					<div>
						<span className={styles.bold}>Last login: </span>{' '}
						{new Date(player.last_login).toLocaleString()}
					</div>
				) : (
					''
				)}
				{player.last_logout !== null ? (
					<div>
						<span className={styles.bold}>Last logout: </span>{' '}
						{new Date(player.last_logout).toLocaleString()}
					</div>
				) : (
					''
				)}
				{player.last_logout !== null ? (
					<div>
						<span className={styles.bold}>Last game: </span> {player.last_game}
					</div>
				) : (
					''
				)}
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
			{Object.values(player.links).every(x => x === null) ? (
				''
			) : (
				<Socials player={player} />
			)}
		</div>
	);
}
