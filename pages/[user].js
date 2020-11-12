import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { getHtmlFormat } from "../utils/format";

function User() {
	const router = useRouter();
	const [user, setUser] = useState(null);

	useEffect(async () => {
		if (router.query.user) {
			const res = await fetch(
				`https://api.slothpixel.me/api/players/${router.query.user}`
			);

			const data = await res.json();

			setUser(data);
		}
	}, [router.query.user]);

	if (!user) return null;

	return (
		<div>
			<Head>
				<title>{user.username}</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			{getHtmlFormat(`${user.rank_formatted} ${user.username}`)}
		</div>
	);
}

export default User;
