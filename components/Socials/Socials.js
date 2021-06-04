import { Tooltip } from 'react-tippy';

import styles from './Socials.module.scss';

export default function Socials({ player }) {
	return (
		<div className={styles.socials}>
			{player.links.TWITTER ? (
				<a href={player.links.TWITTER} className={styles.socialLink}>
					<img src="/social/twitter.svg" className={styles.socialImg} />
				</a>
			) : (
				''
			)}
			{player.links.YOUTUBE ? (
				<a href={player.links.YOUTUBE} className={styles.socialLink}>
					<img src="/social/youtube.svg" className={styles.socialImg} />
				</a>
			) : (
				''
			)}
			{player.links.INSTAGRAM ? (
				<a href={player.links.INSTAGRAM} className={styles.socialLink}>
					<img src="/social/instagram.svg" className={styles.socialImg} />
				</a>
			) : (
				''
			)}
			{player.links.TWITCH ? (
				<a href={player.links.TWITCH} className={styles.socialLink}>
					<img src="/social/twitch.svg" className={styles.socialImg} />
				</a>
			) : (
				''
			)}
			{player.links.DISCORD ? (
				<Tooltip
					title={player.links.DISCORD}
					animation="shift"
					animateFill={false}
					arrow="true"
					style={{ cursor: 'pointer' }}
				>
					<a className={styles.socialLink}>
						<img src="/social/discord.svg" className={styles.socialImg} />
					</a>
				</Tooltip>
			) : (
				''
			)}
			{player.links.HYPIXEL ? (
				<a href={player.links.HYPIXEL} className={styles.socialLink}>
					<img src="/logo.png" className={styles.socialImg} />
				</a>
			) : (
				''
			)}
		</div>
	);
}
