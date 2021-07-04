import Game from '../../Game/Game';
import { formatBigNumber } from '../../../utils/format';

import styles from '../Games.module.scss';

export default function Arcade({ data }) {
	return (
		<Game name="Arcade">
			<div>
				<div>
					<span className={styles.bold}>Coins: </span>{' '}
					{formatBigNumber(data.coins)}
				</div>
				<div>
					<span className={styles.bold}>Wins: </span>{' '}
					{formatBigNumber(data.wins)}
				</div>
				<div>
					<span className={styles.bold}>Kills: </span>{' '}
					{formatBigNumber(data.kills)}
				</div>
			</div>
			<div>
				<h2 className={styles.heading}>Blocking Dead</h2>
				<div>
					<span className={styles.bold}>Wins: </span>{' '}
					{formatBigNumber(data.modes.blocking_dead.wins)}
				</div>
				<div>
					<span className={styles.bold}>Zombie Kills: </span>{' '}
					{formatBigNumber(data.modes.blocking_dead.zombie_kills)}
				</div>
				<div>
					<span className={styles.bold}>Headshots: </span>{' '}
					{formatBigNumber(data.modes.blocking_dead.headshots)}
				</div>
			</div>
			<div>
				<h2 className={styles.heading}>Dragon Wars</h2>
				<div>
					<span className={styles.bold}>Wins: </span>{' '}
					{formatBigNumber(data.modes.dragonwars.wins)}
				</div>
				<div>
					<span className={styles.bold}>Kills: </span>{' '}
					{formatBigNumber(data.modes.dragonwars.kills)}
				</div>
			</div>
			<div>
				<h2 className={styles.heading}>Hypixel Says</h2>
				<div>
					<span className={styles.bold}>Wins: </span>{' '}
					{formatBigNumber(data.modes.hypixel_says.wins)}
				</div>
				<div>
					<span className={styles.bold}>Kills: </span>{' '}
					{formatBigNumber(data.modes.hypixel_says.rounds)}
				</div>
			</div>
			<div>
				<h2 className={styles.heading}>Santa Says</h2>
				<div>
					<span className={styles.bold}>Wins: </span>{' '}
					{formatBigNumber(data.modes.santa_says.wins)}
				</div>
				<div>
					<span className={styles.bold}>Kills: </span>{' '}
					{formatBigNumber(data.modes.santa_says.rounds)}
				</div>
			</div>
			<div>
				<h2 className={styles.heading}>MiniWalls</h2>
				<div>
					<span className={styles.bold}>Wins: </span>{' '}
					{formatBigNumber(data.modes.miniwalls.wins)}
				</div>
				<div>
					<span className={styles.bold}>Kills: </span>{' '}
					{formatBigNumber(data.modes.miniwalls.kills)}
				</div>
				<div>
					<span className={styles.bold}>Deaths: </span>{' '}
					{formatBigNumber(data.modes.miniwalls.deaths)}
				</div>
				<div>
					<span className={styles.bold}>Final Kills: </span>{' '}
					{formatBigNumber(data.modes.miniwalls.final_kills)}
				</div>
				<div>
					<span className={styles.bold}>Arrows Shot: </span>{' '}
					{formatBigNumber(data.modes.miniwalls.arrows_shot)}
				</div>
				<div>
					<span className={styles.bold}>Arrows Hit: </span>{' '}
					{formatBigNumber(data.modes.miniwalls.arrows_hit)}
				</div>
				<div>
					<span className={styles.bold}>Wither Damage: </span>{' '}
					{formatBigNumber(data.modes.miniwalls.wither_damage)}
				</div>
				<div>
					<span className={styles.bold}>Wither Kills: </span>{' '}
					{formatBigNumber(data.modes.miniwalls.wither_kills)}
				</div>
				<div>
					<span className={styles.bold}>Kit: </span> {data.modes.miniwalls.kit}
				</div>
			</div>
			<div>
				<h2 className={styles.heading}>Party Games</h2>
				<div>
					<span className={styles.bold}>Party Games 1 Wins: </span>{' '}
					{formatBigNumber(data.modes.party_games.wins_1)}
				</div>
				<div>
					<span className={styles.bold}>Party Games 2 Wins: </span>{' '}
					{formatBigNumber(data.modes.party_games.wins_2)}
				</div>
				<div>
					<span className={styles.bold}>Party Games 3 Wins: </span>{' '}
					{formatBigNumber(data.modes.party_games.wins_3)}
				</div>
			</div>
			<div>
				<h2 className={styles.heading}>Bounty Hunters</h2>
				<div>
					<span className={styles.bold}>Wins: </span>{' '}
					{formatBigNumber(data.modes.bounty_hunters.wins)}
				</div>
				<div>
					<span className={styles.bold}>Kills: </span>{' '}
					{formatBigNumber(data.modes.bounty_hunters.kills)}
				</div>
				<div>
					<span className={styles.bold}>Bounty Kills: </span>{' '}
					{formatBigNumber(data.modes.bounty_hunters.bounty_kills)}
				</div>
				<div>
					<span className={styles.bold}>Deaths: </span>{' '}
					{formatBigNumber(data.modes.bounty_hunters.deaths)}
				</div>
			</div>
			<div>
				<h2 className={styles.heading}>Galaxy Wars</h2>
				<div>
					<span className={styles.bold}>Wins: </span>{' '}
					{formatBigNumber(data.modes.galaxy_wars.wins)}
				</div>
				<div>
					<span className={styles.bold}>Kills: </span>{' '}
					{formatBigNumber(data.modes.galaxy_wars.kills)}
				</div>
				<div>
					<span className={styles.bold}>Rebel Kills: </span>{' '}
					{formatBigNumber(data.modes.galaxy_wars.rebel_kills)}
				</div>
				<div>
					<span className={styles.bold}>Deaths: </span>{' '}
					{formatBigNumber(data.modes.galaxy_wars.deaths)}
				</div>
				<div>
					<span className={styles.bold}>Shots Fired: </span>{' '}
					{formatBigNumber(data.modes.galaxy_wars.shots_fired)}
				</div>
			</div>
			<div>
				<h2 className={styles.heading}>Farm Hunt</h2>
				<div>
					<span className={styles.bold}>Wins: </span>{' '}
					{formatBigNumber(data.modes.farm_hunt.wins)}
				</div>
				<div>
					<span className={styles.bold}>Poop Collected: </span>{' '}
					{formatBigNumber(data.modes.farm_hunt.poop_collected)}
				</div>
			</div>
			<div>
				<h2 className={styles.heading}>Football</h2>
				<div>
					<span className={styles.bold}>Wins: </span>{' '}
					{formatBigNumber(data.modes.football.wins)}
				</div>
				<div>
					<span className={styles.bold}>Goals: </span>{' '}
					{formatBigNumber(data.modes.football.goals)}
				</div>
				<div>
					<span className={styles.bold}>Powerkicks: </span>{' '}
					{formatBigNumber(data.modes.football.powerkicks)}
				</div>
			</div>
			<div>
				<h2 className={styles.heading}>Creeper Attack</h2>
				<div>
					<span className={styles.bold}>Best Wave: </span>{' '}
					{formatBigNumber(data.modes.creeper_attack.best_wave)}
				</div>
			</div>
			<div>
				<h2 className={styles.heading}>Hole in the Wall</h2>
				<div>
					<span className={styles.bold}>Wins: </span>{' '}
					{formatBigNumber(data.modes.hole_in_the_wall.wins)}
				</div>
				<div>
					<span className={styles.bold}>Rounds: </span>{' '}
					{formatBigNumber(data.modes.hole_in_the_wall.rounds)}
				</div>
				<div>
					<span className={styles.bold}>Highest Score (Qualification): </span>{' '}
					{formatBigNumber(
						data.modes.hole_in_the_wall.highest_score_qualification
					)}
				</div>
				<div>
					<span className={styles.bold}>Highest Score (Finals): </span>{' '}
					{formatBigNumber(data.modes.hole_in_the_wall.highest_score_finals)}
				</div>
			</div>
			<div>
				<h2 className={styles.heading}>Zombies</h2>
				<div>
					<span className={styles.bold}>Wins: </span>{' '}
					{formatBigNumber(data.modes.zombies.wins)}
				</div>
				<div>
					<span className={styles.bold}>Zombie Kills: </span>{' '}
					{formatBigNumber(data.modes.zombies.zombie_kills)}
				</div>
				<div>
					<span className={styles.bold}>Deaths: </span>{' '}
					{formatBigNumber(data.modes.zombies.deaths)}
				</div>
				<div>
					<span className={styles.bold}>Total Rounds Survived: </span>{' '}
					{formatBigNumber(data.modes.zombies.total_rounds_survived)}
				</div>
				<div>
					<span className={styles.bold}>Bullets Hit: </span>{' '}
					{formatBigNumber(data.modes.zombies.bullets_hit)}
				</div>
				<div>
					<span className={styles.bold}>Headshots: </span>{' '}
					{formatBigNumber(data.modes.zombies.headshots)}
				</div>
				<div>
					<span className={styles.bold}>Players Revived: </span>{' '}
					{formatBigNumber(data.modes.zombies.players_revived)}
				</div>
				<div>
					<span className={styles.bold}>Windows Repaired: </span>{' '}
					{formatBigNumber(data.modes.zombies.windows_repaired)}
				</div>
				<div>
					<span className={styles.bold}>Doors Opened: </span>{' '}
					{formatBigNumber(data.modes.zombies.doors_opened)}
				</div>
				<div>
					<span className={styles.bold}>Best Round: </span>{' '}
					{formatBigNumber(data.modes.zombies.best_round)}
				</div>
			</div>
		</Game>
	);
}
