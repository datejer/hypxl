import Layout from '../../components/Layout/Layout';

function Guild({ guildName }) {
	return <Layout current="guild"></Layout>;
}

export async function getServerSideProps(ctx) {
	const guildName = ctx.query.guildName;
	return { props: { guildName } };
}

export default Guild;
