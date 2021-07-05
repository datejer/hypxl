import Layout from '../../../components/Layout/Layout';

function GuildMember({ username }) {
	return <Layout current="guild"></Layout>;
}

export async function getServerSideProps(ctx) {
	const username = ctx.query.username;
	return { props: { username } };
}

export default GuildMember;
