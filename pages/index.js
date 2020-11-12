import { useRouter } from "next/router";
import { useState } from "react";
import SEO from "../components/seo";
import styles from "../styles/Home.module.css";

export default function Home() {
	const [username, setUsername] = useState();
	const router = useRouter();

	const handleKeyDown = (event) => {
		if (event.key === "Enter") {
			router.push("/" + username);
		}
	};

	return (
		<div>
			<SEO />
			<input
				placeholder="Enter username..."
				name="username"
				onChange={(event) => {
					setUsername(event.target.value);
				}}
				onKeyDown={handleKeyDown}
			/>
		</div>
	);
}
