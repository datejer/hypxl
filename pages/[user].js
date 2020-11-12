import { useState, useEffect } from "react";
import SEO from "../components/seo";
import { getHtmlFormat } from "../utils/format";

import styles from "../styles/User.module.css";

function User({ username }) {
	const [user, setUser] = useState(null);

	useEffect(async () => {
		const res = await fetch(
			`https://api.slothpixel.me/api/players/${username}`
		);

		const data = await res.json();

		setUser(data);
	}, []);

	if (!user)
		return <SEO title={username} description={`View ${username}'s stats.`} />;

	return (
		<div>
			<SEO
				title={user.username}
				description={`View ${user.username}'s stats.`}
				favicon={`https://visage.surgeplay.com/face/8/${user.uuid}`}
				ogimg={`https://visage.surgeplay.com/bust/${user.uuid}`}
			/>
			<img
				src={`https://visage.surgeplay.com/bust/${user.uuid}`}
				className={styles.bust}
			/>
			<h1 className={styles.username}>
				{getHtmlFormat(`${user.rank_formatted} ${user.username}`)}
			</h1>
		</div>
	);
}

export async function getServerSideProps(ctx) {
	const username = ctx.query.user;
	return { props: { username } };
}

export default User;
