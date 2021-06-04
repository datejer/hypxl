import Layout from '../../components/Layout/Layout';
import PlayerPage from '../../components/PlayerPage/PlayerPage';

function Player({ username }) {
	return (
		<Layout current="player">
			<PlayerPage username={username} />
		</Layout>
	);
}

export async function getServerSideProps(ctx) {
	const username = ctx.query.username;
	return { props: { username } };
}

export default Player;
