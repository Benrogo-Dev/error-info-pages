import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Error Pages",
	description: "Custom error pages",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
