import Layout from '../components/Layout/Layout';
import PlayerSearchPage from '../components/PlayerSearchPage/PlayerSearchPage';

function PlayerSearch() {
	return (
		<Layout current="player">
			<PlayerSearchPage />
		</Layout>
	);
}

export default PlayerSearch;
