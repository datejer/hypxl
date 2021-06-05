import styles from './Games.module.scss';

import Arcade from './Arcade/Arcade';
import Arena from './Arena/Arena';
import BedWars from './BedWars/BedWars';
import Blitz from './Blitz/Blitz';
import BuildBattle from './BuildBattle/BuildBattle';
import CrazyWalls from './CrazyWalls/CrazyWalls';
import CvC from './CvC/CvC';
import Duels from './Duels/Duels';
import MegaWalls from './MegaWalls/MegaWalls';
import MurderMystery from './MurderMystery/MurderMystery';
import Paintball from './Paintball/Paintball';
import Pit from './Pit/Pit';
import Quake from './Quake/Quake';
import SkyClash from './SkyClash/SkyClash';
import SkyWars from './SkyWars/SkyWars';
import Smash from './Smash/Smash';
import SpeedUHC from './SpeedUHC/SpeedUHC';
import TKR from './TKR/TKR';
import TNT from './TNT/TNT';
import UHC from './UHC/UHC';
import VampireZ from './VampireZ/VampireZ';
import Walls from './Walls/Walls';
import Warlords from './Warlords/Warlords';

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
