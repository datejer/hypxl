import { useState, useEffect } from "react";
import SEO from "../../components/seo";
import Layout from "../../components/layout";
import { getHtmlFormat } from "../../utils/format";
import { getCoinMultiplier } from "../../utils/multiplier";
import Socials from "../../components/player/socials";

import styles from "../../styles/User.module.css";

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
		return (
			<Layout current="player">
				<div className={styles.container}>
					<SEO
						title={username}
						description={`View ${username}'s stats.`}
						favicon={`https://minotar.net/avatar/${username}/100.png`}
						ogimg={`https://minotar.net/bust/${username}/100.png`}
					/>
				</div>
			</Layout>
		);

	return (
		<Layout current="player">
			<div className={styles.container}>
				<SEO
					title={user.username}
					description={`View ${user.username}'s stats.`}
					favicon={`https://visage.surgeplay.com/face/8/${user.uuid}`}
					ogimg={`https://visage.surgeplay.com/bust/${user.uuid}`}
				/>

				<div className={styles.user}>
					<div className={styles.stats}>
						<div className={styles.player}>
							<img
								src={`https://visage.surgeplay.com/bust/${user.uuid}`}
								className={styles.bust}
							/>
							<h1 className={styles.username}>
								{getHtmlFormat(`${user.rank_formatted} ${user.username}`)}
							</h1>
							<span
								className={styles.indicator}
								style={{
									backgroundColor: user.online ? "lightgreen" : "orangered",
								}}
							></span>
						</div>
						<div className={styles.info}>
							<div>
								<span className={styles.bold}>Level: </span>{" "}
								{Math.floor(user.level)}
							</div>
							<div>
								<span className={styles.bold}>Coin multiplier: </span>{" "}
								{getCoinMultiplier(Math.floor(user.level))}x
							</div>
							<div>
								<span className={styles.bold}>Experience: </span> {user.exp}
							</div>
							<div>
								<span className={styles.bold}>Achievement points: </span>{" "}
								{user.achievement_points}
							</div>
							<div>
								<span className={styles.bold}>Quests completed: </span>{" "}
								{user.quests_completed}
							</div>
							<br />
							<div>
								<span className={styles.bold}>First login: </span>{" "}
								{new Date(user.first_login).toLocaleString()}
							</div>
							<div>
								<span className={styles.bold}>Last login: </span>{" "}
								{new Date(user.last_login).toLocaleString()}
							</div>
							<div>
								<span className={styles.bold}>Last game: </span>{" "}
								{user.last_game}
							</div>
						</div>
						<Socials player={user} />
					</div>
					<div className={styles.games}>HELO</div>
				</div>
			</div>
		</Layout>
	);
}

export async function getServerSideProps(ctx) {
	const username = ctx.query.user;
	return { props: { username } };
}

export default User;
