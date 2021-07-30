import { useState, useEffect } from "react";
import { useToasts } from "react-toast-notifications";
import { useRouter } from "next/router";
import SEO from "../SEO";
import Stats from "../Stats/Stats";
import NameHistory from "../NameHistory/NameHistory";
import Games from "../Games/Games";
import Loader from "../Loader/Loader";

import styles from "./PlayerPage.module.scss";

function PlayerPage({ username }) {
	const [player, setPlayer] = useState(null);
	const [nameHistory, setNameHistory] = useState([]);
	const { addToast } = useToasts();
	const router = useRouter();

	useEffect(async () => {
		const res = await fetch(
			`https://api.slothpixel.me/api/players/${username}`
		);
		const res2 = await fetch(
			`https://api.ashcon.app/mojang/v2/user/${username}`
		);

		const data = await res.json();
		const data2 = await res2.json();

		if (data.error) {
			router.push("/");
			addToast(data.error, { autoDismiss: true, appearance: "error" });
		} else {
			setPlayer(data);
			setNameHistory(data2.username_history.map((el) => el.username));
		}
	}, []);

	if (!player)
		return (
			<div className={styles.loaderContainer}>
				<SEO
					title={username}
					description={`View ${username}'s stats.`}
					favicon={`https://minotar.net/avatar/${username}/100.png`}
					ogimg={`https://minotar.net/bust/${username}/100.png`}
				/>
				<Loader size="25px" />
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
				<div className={styles.left}>
					<Stats player={player} />
					<NameHistory names={player.name_history} nameHistory={nameHistory} />
				</div>
				<div className={styles.right}>
					<Games player={player} />
				</div>
			</div>
		</div>
	);
}

export default PlayerPage;
