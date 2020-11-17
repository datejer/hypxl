import Header from "../components/header";

export default function Layout({ children, current }) {
	return (
		<>
			<Header current={current} />
			<main>{children}</main>
		</>
	);
}
