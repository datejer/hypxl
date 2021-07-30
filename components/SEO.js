import Head from "next/head";

export default function SEO({ title, description, favicon, ogimg }) {
	const fullTitle = title ? `${title} – Hypxl` : "Hypxl";

	const fullDescription = description || "Hypixel statistics lookup. 📊";

	const fullIcon = favicon || "/logo.png";

	const fullOGImage = ogimg || "https://i.imgur.com/9CyqrJc.png";

	return (
		<Head>
			<title>{fullTitle}</title>
			<link rel="icon" href={fullIcon} />

			<meta name="title" content={title} />
			<meta name="description" content={fullDescription} />

			<meta property="og:type" content="website" />
			<meta property="og:url" content="https://hypxl.ga/" />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={fullDescription} />
			<meta property="og:image" content={fullOGImage} />

			{/* <meta property="twitter:card" content="summary_large_image" /> */}
			<meta property="twitter:url" content="https://hypxl.ga/" />
			<meta property="twitter:domain" content="hypxl.ga" />
			<meta property="twitter:title" content={title} />
			<meta property="twitter:description" content={fullDescription} />
			<meta property="twitter:image" content={fullOGImage} />

			<meta property="og:site_name" content="Hypxl" />
			<meta name="theme-color" content="#FCA96D" />
		</Head>
	);
}
