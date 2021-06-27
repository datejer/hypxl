import Game from '../Game/Game';

import styles from './NameHistory.module.scss';

export default function NameHistory({ names }) {
	return (
		<div className={styles.nameHistory}>
			<Game name="Name History">
				<ol className={styles.list}>
					{names.map((name, i, { length }) => (
						<li
							key={name}
							style={i + 1 === length ? { fontWeight: '600' } : {}}
						>
							{name}
						</li>
					))}
				</ol>
			</Game>
		</div>
	);
}
