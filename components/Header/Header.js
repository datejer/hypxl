import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from './Header.module.scss';

export default function Header({ current }) {
	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(!open);
	};

	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<span
					className={`${styles.topButtons} ${
						open ? styles.openTopButtons : ''
					}`}
				>
					<Link href="/">
						<a className={`${styles.logo} ${styles.link}`}>
							<Image src="/logo.png" alt="Hypxl" width={48} height={48} />
						</a>
					</Link>
					<span
						className={`${styles.burger} ${styles.link}`}
						onClick={handleOpen}
					>
						{open ? (
							<svg
								style={{ width: '36px', height: '36px' }}
								viewBox="0 0 24 24"
							>
								<path
									fill="#000"
									d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
								/>
							</svg>
						) : (
							<svg
								style={{ width: '36px', height: '36px' }}
								viewBox="0 0 24 24"
							>
								<path
									fill="#000"
									d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"
								/>
							</svg>
						)}
					</span>
				</span>
				<span className={`${styles.links} ${open ? styles.openLinks : ''}`}>
					<Link href="/player">
						<a
							className={styles.link}
							style={{ fontWeight: current === 'player' ? 700 : 400 }}
						>
							Player
						</a>
					</Link>
					<Link href="/guild">
						<a
							className={styles.link}
							style={{ fontWeight: current === 'guild' ? 700 : 400 }}
						>
							Guild
						</a>
					</Link>
					<Link href="/leaderboards">
						<a
							className={styles.link}
							style={{ fontWeight: current === 'leaderboards' ? 700 : 400 }}
						>
							Leaderboards
						</a>
					</Link>
					<Link href="/boosters">
						<a
							className={styles.link}
							style={{ fontWeight: current === 'boosters' ? 700 : 400 }}
						>
							Boosters
						</a>
					</Link>
					<Link href="/bans">
						<a
							className={styles.link}
							style={{ fontWeight: current === 'bans' ? 700 : 400 }}
						>
							Bans
						</a>
					</Link>
				</span>
			</div>
		</div>
	);
}
