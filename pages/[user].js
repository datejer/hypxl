import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import SEO from "../components/seo";
import { getHtmlFormat } from "../utils/format";

import styles from "../styles/User.module.css";

function User() {
	const router = useRouter();
	const [user, setUser] = useState(null);

	useEffect(async () => {
		if (router.query.user) {
			const res = await fetch(
				`https://api.slothpixel.me/api/players/${router.query.user}`
			);

			const data = await res.json();

			setUser(data);
		}
	}, [router.query.user]);

	if (!user)
		return (
			<SEO
				title={router.query.user}
				description={`View ${router.query.user}'s stats.`}
			/>
		);

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

export default User;
