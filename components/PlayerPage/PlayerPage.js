import { useState, useEffect } from 'react';
import SEO from '../SEO';
import Stats from '../Stats/Stats';
import Games from '../Games/Games';

import styles from './PlayerPage.module.scss';

function PlayerPage({ username }) {
	const [player, setPlayer] = useState(null);

	useEffect(async () => {
		const res = await fetch(
			`https://api.slothpixel.me/api/players/${username}`
		);

		const data = await res.json();

		setPlayer(data);
	}, []);

	if (!player)
		return (
			<div className={styles.container}>
				<SEO
					title={username}
					description={`View ${username}'s stats.`}
					favicon={`https://minotar.net/avatar/${username}/100.png`}
					ogimg={`https://minotar.net/bust/${username}/100.png`}
				/>
			</div>
		);

	return (
		<div className={styles.container}>
			<SEO
				title={player.username}
				description={`View ${player.username}'s stats.`}
				favicon={`https://visage.surgeplay.com/face/8/${player.uuid}`}
				ogimg={`https://visage.surgeplay.com/bust/${player.uuid}`}
			/>

			<div className={styles.user}>
				<Stats player={player} />
				<Games player={player} />
			</div>
		</div>
	);
}

export default PlayerPage;
