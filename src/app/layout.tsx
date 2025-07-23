import type { Metadata } from "next";
import "./globals.css";

/**
 * The root layout for the application.
 * This is where global styles are imported and the basic HTML structure is defined.
 */

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
