import styles from "../../styles/User.module.css";

export default function Socials({ player }) {
	return (
		<div className={styles.socials}>
			{player.links.TWITTER ? (
				<a href={player.links.TWITTER} className={styles.sociallink}>
					<img src="/twitter.svg" className={styles.socialimg} />
				</a>
			) : (
				""
			)}
			{player.links.YOUTUBE ? (
				<a href={player.links.YOUTUBE} className={styles.sociallink}>
					<img src="/youtube.svg" className={styles.socialimg} />
				</a>
			) : (
				""
			)}
			{player.links.INSTAGRAM ? (
				<a href={player.links.INSTAGRAM} className={styles.sociallink}>
					<img src="/instagram.svg" className={styles.socialimg} />
				</a>
			) : (
				""
			)}
			{player.links.TWITCH ? (
				<a href={player.links.TWITCH} className={styles.sociallink}>
					<img src="/twitch.svg" className={styles.socialimg} />
				</a>
			) : (
				""
			)}
			{player.links.DISCORD ? (
				<a
					href={`https://discordprofile.gq/${player.links.DISCORD}`}
					className={styles.sociallink}
				>
					<img src="/discord.svg" className={styles.socialimg} />
				</a>
			) : (
				""
			)}
			{player.links.HYPIXEL ? (
				<a href={player.links.HYPIXEL} className={styles.sociallink}>
					<img src="/logo.png" className={styles.socialimg} />
				</a>
			) : (
				""
			)}
		</div>
	);
}
