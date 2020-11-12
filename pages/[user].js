import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
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

	if (!user) return null;

	return (
		<div>
			<Head>
				<title>{user.username}</title>
				<link
					rel="icon"
					href={`https://visage.surgeplay.com/face/${user.uuid}`}
				/>
			</Head>
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
