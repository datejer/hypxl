import { useRouter } from 'next/router';
import { useState } from 'react';
import SEO from '../SEO';

import styles from './PlayerSearchPage.module.scss';

function PlayerSearchPage() {
	const [username, setUsername] = useState();
	const router = useRouter();

	const handleKeyDown = (event) => {
		if (event.key === 'Enter') {
			router.push('/player/' + username);
		}
	};

	return (
		<div className={styles.container}>
			<SEO />
			<input
				placeholder="Enter username..."
				name="username"
				autoComplete="off"
				onChange={(event) => {
					setUsername(event.target.value);
				}}
				onKeyDown={handleKeyDown}
				className={styles.input}
			/>
		</div>
	);
}

export default PlayerSearchPage;
