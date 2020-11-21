import Link from "next/link";
import styles from "../styles/Header.module.css";

export default function Header({ current }) {
	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<Link href="/">
					<a>
						<img src="/logo.png" className={styles.logo} />
					</a>
				</Link>
				<Link href="/player">
					<a style={{ fontWeight: current === "player" ? 700 : 400 }}>Player</a>
				</Link>
				<Link href="/guild">
					<a>Guild</a>
				</Link>
				<Link href="/leaderboards">
					<a>Leaderboards</a>
				</Link>
				<Link href="/boosters">
					<a>Boosters</a>
				</Link>
				<Link href="/watchdog">
					<a style={{ fontWeight: current === "watchdog" ? 700 : 400 }}>
						Watchdog
					</a>
				</Link>
			</div>
		</div>
	);
}
