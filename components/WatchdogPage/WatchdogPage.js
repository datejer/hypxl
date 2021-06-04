import { useState, useEffect } from 'react';
import SEO from '../../components/seo';
import { getHtmlFormat } from '../../utils/format';

import styles from './WatchdogPage.module.scss';

function WatchdogPage() {
	const [stats, setStats] = useState({});

	useEffect(async () => {
		const res = await fetch(`https://api.slothpixel.me/api/bans`);

		const data = await res.json();

		setStats(data);
	}, []);

	return (
		<div className={styles.container}>
			<SEO
				title="Watchdog Stats"
				description={`View player ban statistics across the network.`}
			/>

			<div className={styles.stats}>
				<div className={styles.watchdog}>
					<h1 className={styles.title}>{getHtmlFormat(`&4Watchdog Bans`)}</h1>
					<div className={styles.info}>
						<div>
							<span className={styles.bold}>Bans in last minute: </span>{' '}
							{stats.watchdog?.last_minute}
						</div>
						<div>
							<span className={styles.bold}>Bans today: </span>{' '}
							{stats.watchdog?.daily}
						</div>
						<div>
							<span className={styles.bold}>Total bans: </span>{' '}
							{stats.watchdog?.total}
						</div>
					</div>
				</div>
				<div className={styles.staff}>
					<h1 className={styles.title}>{getHtmlFormat(`&cStaff Bans`)}</h1>
					<div className={styles.info}>
						<div>
							<span className={styles.bold}>Bans today: </span>{' '}
							{stats.staff?.daily}
						</div>
						<div>
							<span className={styles.bold}>Total bans: </span>{' '}
							{stats.staff?.total}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default WatchdogPage;
