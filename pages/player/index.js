import { useRouter } from "next/router";
import { useState } from "react";
import SEO from "../../components/seo";
import Layout from "../../components/layout";
import styles from "../../styles/Home.module.css";

export default function Home() {
	const [username, setUsername] = useState();
	const router = useRouter();

	const handleKeyDown = (event) => {
		if (event.key === "Enter") {
			router.push("/player/" + username);
		}
	};

	return (
		<Layout>
			<div className={styles.container}>
				<SEO />
				<input
					placeholder="Enter username..."
					name="username"
					autoComplete="off"
					onChange={(event) => {
						setUsername(event.target.value);
					}}
					onKeyDown={handleKeyDown}
					className={styles.input}
				/>
			</div>
		</Layout>
	);
}
