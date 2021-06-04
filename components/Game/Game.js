import { useState } from 'react';

import styles from './Game.module.scss';

export default function Game({ name, children }) {
	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(!open);
	};

	return (
		<div className={styles.game}>
			<div className={styles.collapse} onClick={handleOpen}>
				{open ? (
					<svg className={styles.collapseIcon} viewBox="0 0 24 24">
						<path
							fill="currentColor"
							d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
						/>
					</svg>
				) : (
					<svg className={styles.collapseIcon} viewBox="0 0 24 24">
						<path
							fill="currentColor"
							d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
						/>
					</svg>
				)}
				<h4 className={styles.name}>{name}</h4>
			</div>
			{open ? <div className={styles.contents}>{children}</div> : ''}
		</div>
	);
}
