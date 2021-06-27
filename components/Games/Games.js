import styles from './Games.module.scss';

import Arcade from './Modes/Arcade';
import Arena from './Modes/Arena';
import BedWars from './Modes/BedWars';
import Blitz from './Modes/Blitz';
import BuildBattle from './Modes/BuildBattle';
import CrazyWalls from './Modes/CrazyWalls';
import CvC from './Modes/CvC';
import Duels from './Modes/Duels';
import MegaWalls from './Modes/MegaWalls';
import MurderMystery from './Modes/MurderMystery';
import Paintball from './Modes/Paintball';
import Pit from './Modes/Pit';
import Quake from './Modes/Quake';
import SkyClash from './Modes/SkyClash';
import SkyWars from './Modes/SkyWars';
import Smash from './Modes/Smash';
import SpeedUHC from './Modes/SpeedUHC';
import TKR from './Modes/TKR';
import TNT from './Modes/TNT';
import UHC from './Modes/UHC';
import VampireZ from './Modes/VampireZ';
import Walls from './Modes/Walls';
import Warlords from './Modes/Warlords';

export default function Games({ player }) {
	return (
		<div className={styles.games}>
			<Arcade data={player.stats.Arcade} />
			<Arena data={player.stats.Arena} />
			<BedWars data={player.stats.BedWars} />
			<Blitz data={player.stats.Blitz} />
			<BuildBattle data={player.stats.BuildBattle} />
			<CrazyWalls data={player.stats.CrazyWalls} />
			<CvC data={player.stats.CvC} />
			<Duels data={player.stats.Duels} />
			<MegaWalls data={player.stats.MegaWalls} />
			<MurderMystery data={player.stats.MurderMystery} />
			<Paintball data={player.stats.Paintball} />
			<Pit data={player.stats.Pit} />
			<Quake data={player.stats.Quake} />
			<SkyClash data={player.stats.SkyClash} />
			<SkyWars data={player.stats.SkyWars} />
			<Smash data={player.stats.Smash} />
			<SpeedUHC data={player.stats.SpeedUHC} />
			<TKR data={player.stats.TKR} />
			<TNT data={player.stats.TNT} />
			<UHC data={player.stats.UHC} />
			<VampireZ data={player.stats.VampireZ} />
			<Walls data={player.stats.Walls} />
			<Warlords data={player.stats.Warlords} />
		</div>
	);
}
