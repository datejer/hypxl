import Image from 'next/image';
import { Tooltip } from 'react-tippy';
import Game from '../Game/Game';

import styles from './NameHistory.module.scss';

export default function NameHistory({ names, nameHistory }) {
	return (
		<div className={styles.nameHistory}>
			<Game name="Name History">
				<ol className={styles.list}>
					{nameHistory.map((name, i, { length }) => (
						<li key={i} style={i + 1 === length ? { fontWeight: '600' } : {}}>
							{name}{' '}
							{names.includes(name) ? (
								<Tooltip
									title={'Seen on Hypixel'}
									animation="shift"
									animateFill={false}
									arrow="true"
								>
									<span style={{ verticalAlign: 'middle' }}>
										<Image src="/logo.png" width="16" height="16" />
									</span>
								</Tooltip>
							) : (
								''
							)}
						</li>
					))}
				</ol>
			</Game>
		</div>
	);
}
