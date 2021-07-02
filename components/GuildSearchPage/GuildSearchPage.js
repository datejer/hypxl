import { useRouter } from 'next/router';
import { useState } from 'react';
import SEO from '../SEO';

import styles from './GuildSearchPage.module.scss';

function GuildSearchPage() {
	const [guildName, setGuildName] = useState();
	const [username, setUsername] = useState();
	const router = useRouter();

	const handleGuildName = event => {
		if (event.key === 'Enter') {
			router.push('/guild/' + guildName);
		}
	};

	const handleUsername = event => {
		if (event.key === 'Enter') {
			router.push('/guild/member/' + username);
		}
	};

	return (
		<div className={styles.container}>
			<SEO
				title="Guild Stats"
				description="View guild members and statistics across the network."
			/>
			<input
				placeholder="Enter guild name..."
				name="guildName"
				autoComplete="off"
				onChange={event => {
					setGuildName(event.target.value);
				}}
				onKeyDown={handleGuildName}
				className={styles.input}
			/>
			<div className={styles.or}>or</div>
			<input
				placeholder="Enter username..."
				name="username"
				autoComplete="off"
				onChange={event => {
					setUsername(event.target.value);
				}}
				onKeyDown={handleUsername}
				className={styles.input}
			/>
		</div>
	);
}

export default GuildSearchPage;
